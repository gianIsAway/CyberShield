// Dashboard.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import styles from '../styles/dashboardStyles';

const screenWidth = Dimensions.get('window').width - 40;

const Dashboard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const colors = {
    background: isDarkMode ? '#121212' : '#f4f4f4',
    card: isDarkMode ? '#1E1E1E' : '#fff',
    text: isDarkMode ? '#fff' : '#000',
  };

  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({});

  const getMostCommon = (arr) => {
    const count = {};
    arr.forEach((item) => {
      count[item] = (count[item] || 0) + 1;
    });
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0];
  };

  const getPercentages = (arr) => {
    const total = arr.length;
    const count = {};
    arr.forEach((item) => {
      count[item] = (count[item] || 0) + 1;
    });
    return Object.entries(count).map(([key, value], index) => ({
      name: key,
      population: value,
      color: isDarkMode ? `hsl(${index * 60}, 70%, 60%)` : `hsl(${index * 60}, 70%, 50%)`,
      legendFontColor: colors.text,
      legendFontSize: 12,
    }));
  };

  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('denuncias');
      const parsed = storedData ? JSON.parse(storedData) : [];
      setData(parsed);

      const plataformas = parsed.map(d => d.plataforma);
      const tipos = parsed.map(d => d.tipo);
      const faixas = parsed.map(d => d.faixaEtaria);
      const impactos = parsed.map(d => d.impacto);

      setSummary({
        plataforma: getMostCommon(plataformas),
        tipo: getMostCommon(tipos),
        faixaEtaria: getMostCommon(faixas),
        impacto: getMostCommon(impactos),
        porcentagens: {
          plataformas: getPercentages(plataformas),
          tipos: getPercentages(tipos),
          faixas: getPercentages(faixas),
          impactos: getPercentages(impactos),
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = loadData();
    return () => unsubscribe;
  }, [data]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Dashboard Dinâmico</Text>
      <Text style={[styles.description, { color: colors.text }]}>Exibe em tempo real os dados das denúncias registradas. Isso ajuda a promover visibilidade, políticas de prevenção e conscientização sobre violações digitais.</Text>

      <View style={[styles.summaryBox, { backgroundColor: colors.card }]}>
        <Text style={[styles.summaryTitle, { color: colors.text }]}>Resumo</Text>
        <Text style={[styles.summaryItem, { color: colors.text }]}>Plataforma com mais denúncias: {summary.plataforma || '–'}</Text>
        <Text style={[styles.summaryItem, { color: colors.text }]}>Tipo mais comum: {summary.tipo || '–'}</Text>
        <Text style={[styles.summaryItem, { color: colors.text }]}>Faixa etária mais afetada: {summary.faixaEtaria || '–'}</Text>
        <Text style={[styles.summaryItem, { color: colors.text }]}>Impacto mais recorrente: {summary.impacto || '–'}</Text>
      </View>

      {summary.porcentagens && Object.entries(summary.porcentagens).map(([key, chartData], index) => (
        <View key={index} style={styles.chartContainer}>
          <Text style={[styles.chartTitle, { color: colors.text }]}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
          <PieChart
            data={chartData}
            width={screenWidth}
            height={180}
            chartConfig={{
              backgroundColor: colors.background,
              backgroundGradientFrom: colors.background,
              backgroundGradientTo: colors.background,
              color: () => colors.text,
              labelColor: () => colors.text,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="10"
            absolute
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Dashboard;
