import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import homeStyles from '../styles/homeStyles';

const Home = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const colors = {
  background: isDarkMode ? '#121212' : '#FFFFFF',
  card: isDarkMode ? '#1E1E1E' : '#F5F5F5',
  text: isDarkMode ? '#FFFFFF' : '#000000',
  title: isDarkMode ? '#FFFFFF' : '#000000',
  border: isDarkMode ? '#333' : '#CCC',
};

  const styles = homeStyles(colors);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

  <View style={[styles.infoBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
    
<View style={styles.quoteTitleContainer}>
  <View style={styles.quoteLine} />
  <Text style={[styles.quoteTitleText, { color: colors.title }]}>
    A melhor defesa contra os invasores é o conhecimento!
  </Text>
</View>

        <View style={styles.bannerContainer}>
        <Image
          source={require('../images/bannerunig.png')}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

  <Text style={[styles.infoText, { color: colors.text }]}>
    O <Text style={{ fontWeight: 'bold' }}>CyberShield</Text> é um aplicativo informativo voltado à conscientização digital.
    Ele ajuda usuários a reconhecer, evitar e reagir a ameaças como fraudes, golpes, vazamentos de dados e ataques hackers.
    Acreditamos que o <Text style={{ fontStyle: 'italic' }}>conhecimento</Text> é a principal defesa no mundo digital.
  </Text>
</View>

<View style={[styles.feedbackBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
  <View style={styles.feedbackHeader}>
    <Icon name="question-circle" size={24} color={colors.text} style={styles.feedbackIcon} />
    <Text style={[styles.feedbackTitle, { color: colors.title }]}>
      Pesquisa sobre Experiências Digitais
    </Text>
  </View>

  <View style={styles.bannerContainer}>
    <Image
      source={require('../images/cybershield.png')}
      style={styles.banner}
      resizeMode="cover"
    />
  </View>

  <Text style={[styles.feedbackText, { color: colors.text }]}>
    Ajude-nos a entender melhor como as pessoas vivenciam o ambiente digital. Suas respostas vão contribuir para tornar o CyberShield mais relevante, seguro e acolhedor.
  </Text>

  <TouchableOpacity
    style={[styles.feedbackButton, { backgroundColor: isDarkMode ? '#333' : '#000' }]}
    onPress={() =>
      Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdA6M0XROy840-jr60yjwXriUbSBp8lMNHVpWuYCxt5xCcPYQ/viewform?usp=sharing')
    }
  >
    <Text style={styles.feedbackButtonText}>Participar da pesquisa</Text>
  </TouchableOpacity>
</View>

<View style={[styles.feedbackBox, { backgroundColor: colors.card, borderColor: colors.border }]}>

  <View style={styles.feedbackHeader}>
    <Icon name="smile-o" size={24} color={colors.text} style={styles.feedbackIcon} />
    <Text style={[styles.feedbackTitle, { color: colors.title }]}>Formulário de Satisfação</Text>
  </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require('../images/avaliacao.png')}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>

  <Text style={[styles.feedbackText, { color: colors.text }]}>
    Sua opinião é muito importante para melhorarmos continuamente o CyberShield.
    Leva menos de 2 minutos para responder e nos ajuda bastante!
  </Text>

  <TouchableOpacity
    style={[styles.feedbackButton, { backgroundColor: isDarkMode ? '#333' : '#000' }]}
    onPress={() =>
      Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdA6M0XROy840-jr60yjwXriUbSBp8lMNHVpWuYCxt5xCcPYQ/viewform?usp=sharing')
    }
  >
    <Text style={styles.feedbackButtonText}>Responder formulário</Text>
  </TouchableOpacity>
</View>

    </ScrollView>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.card }]} onPress={() => navigation.navigate('Informacoes')}>
          <Icon name="info-circle" size={20} color={colors.text} />
          <Text style={[styles.buttonText, { color: colors.text }]}>Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.card }]} onPress={() => navigation.navigate('Noticias')}>
          <Icon name="newspaper-o" size={20} color={colors.text} />
          <Text style={[styles.buttonText, { color: colors.text }]}>Notícias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.card }]} onPress={() => navigation.navigate('Denuncia')}>
          <Icon name="phone" size={20} color={colors.text} />
          <Text style={[styles.buttonText, { color: colors.text }]}>Denúncia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.card }]} onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="bar-chart" size={26} color={colors.text} />
        <Text style={[styles.buttonText, { color: colors.text }]}>Dashboard</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Home;
