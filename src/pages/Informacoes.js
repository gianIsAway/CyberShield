import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import styles from '../styles/informacoesStyles';
import {
  ShieldCheck, AlertTriangle, Users, Lock,
  EyeOff, Megaphone, Eye, MessageCircle,
  UserX, FileWarning
} from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';

const informacoesList = [
  {
    key: 'direitos',
    icon: <ShieldCheck size={24} color="#4A90E2" />,
    title: 'Direitos Digitais Básicos',
    description:
      'Seus direitos digitais incluem privacidade, liberdade de expressão e acesso à informação. Você tem direito a controlar seus dados pessoais, exigir segurança em plataformas online, ser informado sobre o uso de seus dados, e contestar conteúdos falsos ou prejudiciais.',
  },
  {
    key: 'denuncia',
    icon: <AlertTriangle size={24} color="#F5A623" />,
    title: 'Como Denunciar Violações',
    description:
      'Você pode denunciar crimes digitais em sites como SaferNet, delegacias especializadas em crimes cibernéticos (DEIC), ou diretamente em plataformas como Instagram e Facebook. Reúna provas (prints, links) e faça o registro formalmente.',
  },
  {
    key: 'apoio',
    icon: <Users size={24} color="#7ED321" />,
    title: 'Apoio Jurídico e Psicológico',
    description:
      'Organizações como SaferNet e Defensorias Públicas oferecem orientação jurídica gratuita. Centros de atendimento psicológico em universidades e ONGs especializadas também prestam suporte emocional às vítimas.',
  },
];

const tiposViolacaoIntro = {
  title: 'Tipos de Violação Digital',
  description:
    'Ataques digitais são diversos. Entender cada tipo ajuda a se proteger, identificar sinais de perigo e saber onde buscar ajuda.',
};

const tiposViolacaoList = [
  {
    key: 'cyberbullying',
    icon: <MessageCircle size={24} color="#E94E77" />,
    title: 'Cyberbullying',
    description:
      'Agressões verbais, humilhações e intimidações online repetidas, muitas vezes anônimas, geralmente contra jovens ou minorias.',
  },
  {
    key: 'assedio',
    icon: <UserX size={24} color="#C0392B" />,
    title: 'Assédio Digital',
    description:
      'Contato insistente, envio de mensagens indesejadas com teor sexual ou ofensivo, perseguição ou ameaças por canais digitais.',
  },
  {
    key: 'fraude',
    icon: <FileWarning size={24} color="#D35400" />,
    title: 'Fraude Online',
    description:
      'Enganos com intuito de obter vantagens, como phishing, falsos sorteios, clonagem de cartões ou perfis falsos.',
  },
  {
    key: 'ataques_hacker',
    icon: <Lock size={24} color="#FF6F61" />,
    title: 'Ataques Hacker',
    description:
      'Invasão de sistemas para roubo de dados, controle de contas ou sabotagem de informações pessoais ou corporativas.',
  },
  {
    key: 'exposicao_privada',
    icon: <EyeOff size={24} color="#9B59B6" />,
    title: 'Exposição de Dados Privados',
    description:
      'Vazamento ou compartilhamento não autorizado de fotos íntimas, informações pessoais ou bancárias.',
  },
  {
    key: 'discurso_odio',
    icon: <Megaphone size={24} color="#E67E22" />,
    title: 'Discurso de Ódio',
    description:
      'Publicações que atacam grupos por raça, gênero, religião ou sexualidade, incitando violência ou preconceito.',
  },
  {
    key: 'espionagem',
    icon: <Eye size={24} color="#3498DB" />,
    title: 'Espionagem Digital',
    description:
      'Monitoramento de atividades online sem consentimento, como instalação de spyware ou keyloggers.',
  },
];

const Informacoes = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#121212' : '#f4f4f4' }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>

        {/* Introdução da página */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>Informações Sobre Direitos e Segurança Digital</Text>
          <Image
            source={require('../images/seguranca.png')}
            style={styles.image}
          />
          <Text style={isDark ? styles.descriptionDark : styles.description}>
            Descubra seus direitos na era digital, como denunciar crimes virtuais, identificar tipos de ataques e acessar apoio especializado. Informação é sua melhor proteção.
          </Text>
        </View>

        {/* Sessões de Direitos, Denúncia e Apoio */}
        {informacoesList.map(({ key, icon, title, description }) => (
          <View key={key} style={isDark ? styles.boxDark : styles.box}>
            <View style={styles.listItem}>
              <View style={styles.listIcon}>{icon}</View>
              <View style={styles.listTextContainer}>
                <Text style={isDark ? styles.listTitleDark : styles.listTitle}>{title}</Text>
                <Text style={isDark ? styles.listDescriptionDark : styles.listDescription}>{description}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* Introdução aos tipos de violação */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>{tiposViolacaoIntro.title}</Text>
          <Text style={isDark ? styles.descriptionDark : styles.description}>{tiposViolacaoIntro.description}</Text>
        </View>

        {/* Lista de tipos de violação */}
        {tiposViolacaoList.map(({ key, icon, title, description }) => (
          <View key={key} style={isDark ? styles.boxDark : styles.box}>
            <View style={styles.listItem}>
              <View style={styles.listIcon}>{icon}</View>
              <View style={styles.listTextContainer}>
                <Text style={isDark ? styles.listTitleDark : styles.listTitle}>{title}</Text>
                <Text style={isDark ? styles.listDescriptionDark : styles.listDescription}>{description}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* ODS 16 */}
        <View style={isDark ? styles.boxDark : styles.box}>
          <Text style={isDark ? styles.titleDark : styles.title}>ODS 16: Paz, Justiça e Instituições Fortes</Text>
          <Image
            source={require('../images/ods2.jpg')}
            style={styles.ods}
          />
          <Text style={isDark ? styles.descriptionDark : styles.description}>
            A ODS 16, parte da Agenda 2030 da ONU, promove sociedades mais inclusivas, com justiça acessível e instituições eficazes. Ela destaca a importância da transparência, acesso à informação, combate à corrupção e proteção de direitos fundamentais — incluindo os digitais. Isso fortalece a democracia e a segurança online, garantindo um ambiente mais seguro para todos.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Informacoes;
