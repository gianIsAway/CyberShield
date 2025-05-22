// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from '../context/ThemeContext';
import { buscarDenuncias } from '../lib/supabaseClient';
import styles from '../styles/dashboardStyles';

const screenWidth = Dimensions.get('window').width;

const cores = ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#9C27B0', '#FF9800'];

const campos = [
  { key: 'faixa_etaria', titulo: 'Faixa Etária' },
  { key: 'periodo', titulo: 'Período da Violação' },
  { key: 'tipo_violacao', titulo: 'Tipo de Violação' },
  { key: 'plataforma', titulo: 'Plataforma' },
  { key: 'impacto', titulo: 'Impacto Causado' },
  { key: 'foi_reportada', titulo: 'Foi Reportada?' },
];

export default function Dashboard() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  const coresTexto = {
    fundo: isDark ? '#121212' : '#f2f2f2',
    card: isDark ? '#1e1e1e' : '#fff',
    texto: isDark ? '#fff' : '#000',
    borda: isDark ? '#333' : '#ddd',
  };

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await buscarDenuncias();
        setDados(resposta);
      } catch (error) {
        console.error('Erro ao buscar denúncias:', error);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  const contarOcorrencias = (chave) => {
    const contagem = {};
    dados.forEach((item) => {
      const valor = item[chave];
      if (valor) {
        contagem[valor] = (contagem[valor] || 0) + 1;
      }
    });
    const total = Object.values(contagem).reduce((a, b) => a + b, 0);
    return Object.entries(contagem).map(([label, value], index) => ({
      name: label,
      population: value,
      color: cores[index % cores.length],
      legendFontColor: coresTexto.texto,
      legendFontSize: 14,
      percentage: ((value / total) * 100).toFixed(1) + '%',
    }));
  };

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: coresTexto.fundo }]}>
        <ActivityIndicator size="large" color="#888" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: coresTexto.fundo }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <Text style={[styles.titulo, { color: coresTexto.texto }]}>Resumo das Denúncias</Text>

        <View
          style={[
            styles.card,
            { backgroundColor: coresTexto.card, borderColor: coresTexto.borda },
          ]}
        >
          <Image source={require('../images/noticia.png')} style={styles.imagem} resizeMode="contain" />
          <Text style={[styles.cardTexto, { color: coresTexto.texto }]}>
            Os dados aqui apresentados são anônimos e ajudam a compreender melhor o cenário das
            violações digitais enfrentadas por diferentes faixas etárias e em diferentes plataformas.
          </Text>
        </View>

        {campos.map(({ key, titulo }) => {
          const dadosGrafico = contarOcorrencias(key);
          if (dadosGrafico.length === 0) return null;

          return (
            <View
              key={key}
              style={[
                styles.card,
                { backgroundColor: coresTexto.card, borderColor: coresTexto.borda },
              ]}
            >
              <Text style={[styles.cardTitulo, { color: coresTexto.texto }]}>{titulo}</Text>
              <PieChart
                data={dadosGrafico}
                width={screenWidth - 40}
                height={220}
                chartConfig={{
                  color: () => coresTexto.texto,
                  labelColor: () => coresTexto.texto,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>
          );
        })}

        <View
          style={[
            styles.card,
            { backgroundColor: coresTexto.card, borderColor: coresTexto.borda },
          ]}
        >
          {/* <Image source={require('../images/noticia.png')} style={styles.imagem} resizeMode="contain" /> */}
          <Text style={[styles.cardTexto, { color: coresTexto.texto }]}>
            Os dados aqui apresentados são anônimos e ajudam a compreender melhor o cenário das
            violações digitais enfrentadas por diferentes faixas etárias e em diferentes plataformas.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
