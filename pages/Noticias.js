import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { styles } from '../styles/noticiasStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Noticias = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const colors = {
    background: isDarkMode ? '#121212' : '#f4f4f4',
    card: isDarkMode ? '#1E1E1E' : '#fff',
    text: isDarkMode ? '#eaeaea' : '#121212',
    border: isDarkMode ? '#333' : '#ddd',
    title: isDarkMode ? '#fff' : '#000',
  };

  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
  <ScrollView
    contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
    showsVerticalScrollIndicator={false}
  >
      {/* Bloco 1 */}
      <View style={[styles.infoBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.infoTitle, { color: colors.title }]}>Direitos Digitais Básicos</Text>
        <Image
          source={require('../images/noticia.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={[styles.infoText, { color: colors.text }]}>
          Todo cidadão tem direito à privacidade, liberdade de expressão e proteção de dados pessoais no ambiente digital. Conhecer esses direitos é o primeiro passo para navegar com mais segurança online.
        </Text>
      </View>

      {/* Bloco 2 */}
      <View style={[styles.infoBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.infoTitle, { color: colors.title }]}>Como Denunciar Violações</Text>
        <Image
          source={require('../images/noticia.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={[styles.infoText, { color: colors.text }]}>
          Em caso de violação de direitos, como vazamento de dados ou discursos de ódio, você pode registrar denúncia no Ministério Público, SaferNet (para crimes na internet) ou na ouvidoria da sua plataforma.
        </Text>
      </View>

      {/* Bloco 3 */}
      <View style={[styles.infoBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.infoTitle, { color: colors.title }]}>Onde Buscar Apoio</Text>
        <Image
          source={require('../images/noticia.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={[styles.infoText, { color: colors.text }]}>
          Você pode procurar ajuda gratuita no Ministério Público, na Defensoria Pública e em ONGs especializadas em direitos digitais. Apoio psicológico também é oferecido em centros de apoio e por canais como o CVV (188).
        </Text>
      </View>
      </ScrollView>
</SafeAreaView>
  );
};

export default Noticias;
