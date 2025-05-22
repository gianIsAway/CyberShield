import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import styles from '../styles/informacoesStyles';
import { ShieldCheck, AlertTriangle, Users, Lock, EyeOff, Megaphone, Eye, MessageCircle } from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';

const informacoesList = [
  {
    key: 'direitos',
    icon: <ShieldCheck size={24} color="#4A90E2" />,
    title: 'Direitos Digitais Básicos',
    description:
      'Seus direitos digitais garantem a proteção da sua privacidade, liberdade de expressão e segurança online. Isso inclui o direito ao consentimento sobre dados pessoais, acesso à informação e a proteção contra abusos e crimes digitais.',
  },
  {
    key: 'denuncia',
    icon: <AlertTriangle size={24} color="#F5A623" />,
    title: 'Como Denunciar Violações',
    description:
      'É fundamental saber como identificar e denunciar violações digitais. Você pode registrar denúncias em plataformas oficiais, órgãos de proteção ao consumidor, autoridades policiais e entidades de direitos humanos para garantir que os responsáveis sejam responsabilizados.',
  },
  {
    key: 'apoio',
    icon: <Users size={24} color="#7ED321" />,
    title: 'Apoio Jurídico e Psicológico',
    description:
      'Além do aspecto legal, muitas vítimas de ataques digitais precisam de suporte psicológico para lidar com os impactos emocionais. Organizações especializadas oferecem assistência jurídica gratuita e atendimento psicológico para ajudar na recuperação.',
  },
];

const tiposViolacaoIntro = {
  title: 'Tipos de Violação Digital',
  description:
    'Existem várias formas de ataques digitais que podem comprometer sua segurança e bem-estar. Conhecer cada tipo ajuda a prevenir, identificar e agir corretamente diante dessas situações.',
};

const tiposViolacaoList = [
  {
    key: 'cyberbullying',
    icon: <MessageCircle size={24} color="#E94E77" />,
    title: 'Cyberbullying',
    description:
      'Ataques repetidos e intencionais por meio da internet para humilhar, intimidar ou prejudicar alguém, causando sofrimento emocional e psicológico.',
  },
  {
    key: 'ataques_hacker',
    icon: <Lock size={24} color="#FF6F61" />,
    title: 'Ataques Hacker',
    description:
      'Tentativas de invasão ou comprometimento de sistemas, redes ou dispositivos para roubo de informações, dano ou controle não autorizado.',
  },
  {
    key: 'exposicao_privada',
    icon: <EyeOff size={24} color="#9B59B6" />,
    title: 'Exposição de Dados Privados',
    description:
      'Divulgação não autorizada de informações pessoais, fotos ou vídeos íntimos que violam a privacidade da vítima.',
  },
  {
    key: 'discurso_odio',
    icon: <Megaphone size={24} color="#E67E22" />,
    title: 'Discurso de Ódio',
    description:
      'Mensagens ofensivas que promovem preconceito, discriminação ou violência contra grupos ou indivíduos por raça, gênero, religião ou orientação.',
  },
  {
    key: 'espionagem',
    icon: <Eye size={24} color="#3498DB" />,
    title: 'Espionagem Digital',
    description:
      'Monitoramento ou interceptação secreta de comunicações e dados pessoais para obtenção de informações sem consentimento.',
  },
];

const Informacoes = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#f4f4f4' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        
        {/* Caixa introdutória com imagem */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>Informações Sobre Direitos e Segurança Digital</Text>
          <Text style={isDark ? styles.descriptionDark : styles.description}>
            Esta página oferece um guia completo e acessível sobre seus direitos digitais básicos, como denunciar violações online e onde encontrar apoio jurídico e psicológico.
          </Text>
          <Image
            source={require('../images/noticia.png')}
            style={styles.image}
          />
        </View>

        {/* Caixas com direitos, denúncia e apoio */}
        {informacoesList.map(({ key, icon, title, description }) => (
          <View
            key={key}
            style={[isDark ? styles.boxDark : styles.box]}
          >
            <View style={styles.listItem}>
              <View style={styles.listIcon}>{icon}</View>
              <View style={styles.listTextContainer}>
                <Text style={isDark ? styles.listTitleDark : styles.listTitle}>{title}</Text>
                <Text style={isDark ? styles.listDescriptionDark : styles.listDescription}>
                  {description}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {/* Caixa introdutória aos tipos de violação */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>{tiposViolacaoIntro.title}</Text>
          <Text style={isDark ? styles.descriptionDark : styles.description}>{tiposViolacaoIntro.description}</Text>
        </View>

        {/* Caixas para cada tipo de violação */}
        {tiposViolacaoList.map(({ key, icon, title, description }) => (
          <View key={key} style={isDark ? styles.boxDark : styles.box}>
            <View style={styles.listItem}>
              <View style={styles.listIcon}>{icon}</View>
              <View style={styles.listTextContainer}>
                <Text style={isDark ? styles.listTitleDark : styles.listTitle}>{title}</Text>
                <Text style={isDark ? styles.listDescriptionDark : styles.listDescription}>
                  {description}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {/* Caixa final sobre ODS 16 */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>ODS 16: Paz, Justiça e Instituições Fortes</Text>
          <Text style={isDark ? styles.descriptionDark : styles.description}>
            A ODS 16 busca promover sociedades pacíficas e inclusivas, com acesso à justiça para todos e instituições eficazes e transparentes, essenciais para garantir a proteção dos direitos digitais.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Informacoes;
