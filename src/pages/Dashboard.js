import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeContext';
import { buscarDenuncias } from '../lib/supabaseClient';

const screenWidth = Dimensions.get('window').width;

const categorias = ['plataforma', 'tipo_violacao', 'faixa_etaria', 'impacto'];

const cores = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
  '#8E44AD', '#2ECC71', '#E67E22', '#1ABC9C', '#F39C12', '#7F8C8D'
];

const Dashboard = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [denuncias, setDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);

  const backgroundColor = isDarkMode ? '#121212' : '#f4f4f4';
  const textColor = isDarkMode ? '#fff' : '#000';

  useEffect(() => {
    const carregar = async () => {
      try {
        const dados = await buscarDenuncias();
        setDenuncias(dados);
      } catch (e) {
        console.error('Erro ao buscar denúncias:', e);
      } finally {
        setLoading(false);
      }
    };
    carregar();
  }, []);

  const contarOpcoes = (campo) => {
    const contagem = {};
    denuncias.forEach((d) => {
      const valor = d[campo];
      if (valor) {
        contagem[valor] = (contagem[valor] || 0) + 1;
      }
    });
    return Object.entries(contagem).map(([label, count], index) => ({
      name: label,
      population: count,
      color: cores[index % cores.length],
      legendFontColor: textColor,
      legendFontSize: 12,
    }));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={textColor} />
        <Text style={{ color: textColor, marginTop: 10 }}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor }} contentContainerStyle={{ padding: 20 }}>
      <Text style={{ color: textColor, fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Dashboard de Denúncias
      </Text>

      {categorias.map((cat) => {
        const dados = contarOpcoes(cat);
        if (dados.length === 0) return null;

        return (
          <View key={cat} style={{ marginBottom: 30 }}>
            <Text style={{ color: textColor, fontSize: 18, marginBottom: 10 }}>
              {cat.replace('_', ' ').toUpperCase()}
            </Text>
            <PieChart
              data={dados}
              width={screenWidth - 40}
              height={220}
              chartConfig={{
                backgroundGradientFrom: backgroundColor,
                backgroundGradientTo: backgroundColor,
                color: () => textColor,
                labelColor: () => textColor,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="10"
              absolute
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Dashboard;
