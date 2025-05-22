import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../lib/supabaseClient';

const categorias = ['plataforma', 'tipoViolacao', 'faixaEtaria', 'impacto'];
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#F77825'];

const Dashboard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [dados, setDados] = useState({});

  useEffect(() => {
    fetchDados();
  }, []);

  const fetchDados = async () => {
    const { data, error } = await supabase.from('denuncias').select('*');
    if (error) return;

    const resultado = {};
    categorias.forEach((cat) => {
      const contagem = {};
      data.forEach((item) => {
        const valor = item[cat];
        contagem[valor] = (contagem[valor] || 0) + 1;
      });
      resultado[cat] = contagem;
    });

    setDados(resultado);
  };

  const gerarChartData = (obj) => {
    const total = Object.values(obj).reduce((sum, val) => sum + val, 0);
    return Object.entries(obj).map(([label, valor], index) => ({
      name: label,
      population: valor,
      color: colors[index % colors.length],
      legendFontColor: isDarkMode ? '#fff' : '#000',
      legendFontSize: 14,
    }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#f4f4f4' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ color: isDarkMode ? '#fff' : '#000', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          Resumo das Denúncias
        </Text>

        {categorias.map((cat) => (
          <View key={cat} style={{ marginBottom: 30 }}>
            <Text style={{ color: isDarkMode ? '#fff' : '#000', fontSize: 18, marginBottom: 5 }}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Text>
            {dados[cat] && (
              <PieChart
                data={gerarChartData(dados[cat])}
                width={Dimensions.get('window').width - 40}
                height={220}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
