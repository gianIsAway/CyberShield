import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useTheme } from '../context/ThemeContext';
import stylesBase from '../styles/noticiasStyles';

const Noticias = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [temInternet, setTemInternet] = useState(true);

  const colors = {
    background: isDarkMode ? '#121212' : '#f2f2f2',
    text: isDarkMode ? '#fff' : '#000',
    card: isDarkMode ? '#1e1e1e' : '#fff',
    button: isDarkMode ? '#333' : '#000',
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setTemInternet(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const noticias = [
    {
      titulo: 'PF realiza operações contra organizações criminosas digitais',
      descricao:
        'A Polícia Federal deflagrou as operações Cryptoscam e Wet Cleaning para desarticular grupos envolvidos em crimes cibernéticos, como fraudes financeiras e invasões de sistemas.',
      imagem: 'https://ogimg.infoglobo.com.br/economia/24932197-a82-6b3/FT1086A/Agentes-da-PF.jpg',
      link: 'https://boletimsec.com.br/operacoes-simultaneas-da-pf-visam-desarticular-organizacoes-criminosas/',
    },
    {
      titulo: 'Extensões maliciosas do Chrome roubam dados de usuários',
      descricao:
        'Mais de 100 extensões do navegador Chrome foram identificadas como maliciosas, sendo utilizadas para espionagem digital e roubo de informações pessoais.',
      imagem: 'https://layerxsecurity.com/wp-content/uploads/2023/07/Malicious-Chrome-Extensions-You-Should-Remove-from-Your-Browser_featured-image_830%D1%85434.png',
      link: 'https://boletimsec.com.br/mais-de-100-extensoes-do-chrome-roubam-dados-e-injetam-anuncios/',
    },
    {
      titulo: 'Campanha maliciosa utiliza pacotes Python para ataques em redes sociais',
      descricao:
        'Pesquisadores descobriram pacotes maliciosos no repositório PyPI que estavam sendo usados para validar e-mails roubados e realizar ataques no Instagram e TikTok.',
      imagem: 'https://hermes.dio.me/articles/cover/69b94429-95fd-4fd9-9218-e56f6d40e53a.jpg',
      link: 'https://boletimsec.com.br/nova-campanha-usa-pacotes-python-para-ataques-no-instagram-e-tiktok/',
    },
    {
      titulo: 'Malware escrito em Go ataca servidores Linux',
      descricao:
        'Uma nova campanha de cryptojacking está explorando servidores Redis expostos, utilizando malware desenvolvido em Go para minerar criptomoedas de forma ilícita.',
      imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEga7fbzw1eeM0uBnPz1Ju7XnqdwKWUvtEGfeubnpX4f-FM-jXUjjOp9Sv_yMa1KD2QfR_g6AlIbURTNTG-atTcRVgb8okbLgLwHnhN5GnjvV2uZZ1m1TWlP2CBEpE3IKEqqMDFLhS-9P6I/s0/linux.jpg',
      link: 'https://boletimsec.com.br/malware-escrito-em-go-abusa-de-servidores-linux/',
    },
    {
      titulo: 'Permissões excessivas na AWS expõem contas a riscos',
      descricao:
        'Pesquisadores identificaram que funções padrão do IAM na AWS podem representar riscos significativos, permitindo acessos não autorizados a recursos sensíveis.',
      imagem: 'https://cdn.melhoreshospedagem.com/wp/wp-content/uploads/2022/01/amazon-aws.jpg',
      link: 'https://boletimsec.com.br/permissoes-excessivas-em-iam-da-aws-expoem-contas-a-ataques-avancados/',
    },
    {
      titulo: 'Malware MarsSnake revela espionagem digital chinesa',
      descricao:
        'O grupo de hackers UnsolicitedBooker, ligado à China, foi responsabilizado por uma campanha de ciberespionagem utilizando o malware MarsSnake no Oriente Médio.',
      imagem: 'https://ogimg.infoglobo.com.br/in/2867950-2cc-1cd/FT1086A/O-Globo.jpg',
      link: 'https://boletimsec.com.br/malware-marssnake-expoe-espionagem-digital-chinesa-no-oriente-medio/',
    },
    {
      titulo: 'Site da RVTools é comprometido para distribuir malware',
      descricao:
        'O site oficial da ferramenta RVTools foi invadido e passou a distribuir o malware Bumblebee, colocando em risco usuários que baixaram o software recentemente.',
      imagem: 'https://s2.glbimg.com/Jc5wfNfJcMH9WAUIK3o4H_NLxhw=/620x350/e.glbimg.com/og/ed/f/original/2021/05/21/gettyimages-1299483011.jpg',
      link: 'https://boletimsec.com.br/site-da-rvtools-e-invadido-e-distribui-malware-bumblebee/',
    },
    {
      titulo: 'Ciberataques colocam mineração brasileira em alerta',
      descricao:
        'O setor de mineração no Brasil está em alerta devido ao aumento de ciberataques que podem paralisar operações e comprometer dados estratégicos.',
      imagem: 'https://www.brasilmineral.com.br/sites/default/files/styles/image_in_article/public/2025-05/foto_materia_ti_credito_-_de_lajt_1_0.jpeg.webp?itok=kOTQrHEN',
      link: 'https://www.brasilmineral.com.br/noticias/ciberataques-colocam-mineracao-brasileira-em-alerta-vermelho',
    },
    {
      titulo: 'Ataques de ciberespionagem podem atingir o Brasil',
      descricao:
        'Novos ataques de ciberespionagem, identificados pela ESET, têm como alvo países da América Latina, incluindo o Brasil, com foco em instituições governamentais.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58mXzwKcoA_aeRo2zUGBcSbq9-gcGBLYw1w&s',
      link: 'https://minutodaseguranca.blog.br/novos-ataques-de-ciberespionagem-podem-atingir-o-brasil/',
    },
    {
      titulo: 'Dior confirma ciberataque com vazamento de dados de clientes',
      descricao:
        'A marca Dior confirmou um ciberataque que resultou no vazamento de dados pessoais de clientes, incluindo informações de contato e histórico de compras.',
      imagem: 'https://minutodaseguranca.blog.br/wp-content/uploads/2025/05/dior.jpg',
      link: 'https://minutodaseguranca.blog.br/dior-confirma-ciberataque-com-vazamento-de-dados-de-clientes/',
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={[stylesBase.container, { backgroundColor: colors.background }]}>

        {/* Caixa de Introdução */}
        <View style={[stylesBase.card, { backgroundColor: colors.card }]}>
          <Image
            source={require('../images/noticia.png')}
            style={stylesBase.image}
            resizeMode="cover"
          />
          <Text style={[stylesBase.title, { color: colors.text }]}>
            Notícias sobre Cibersegurança no Brasil
          </Text>
          <Text style={[stylesBase.description, { color: colors.text }]}>
            Nesta seção, você acompanha as notícias mais relevantes sobre segurança digital no Brasil, incluindo violações recentes, ataques a dados e golpes virtuais.
          </Text>
        </View>

        {/* Notícias */}
        {noticias.map((noticia, index) => (
          <View key={index} style={[stylesBase.card, { backgroundColor: colors.card }]}>
            <Image
              source={
                temInternet
                  ? { uri: noticia.imagem }
                  : require('../images/noticia.png')
              }
              style={stylesBase.image}
              resizeMode="cover"
            />
            <Text style={[stylesBase.title, { color: colors.text }]}>{noticia.titulo}</Text>
            <Text style={[stylesBase.description, { color: colors.text }]}>{noticia.descricao}</Text>
            <TouchableOpacity
              style={[stylesBase.button, { backgroundColor: colors.button }]}
              onPress={() => Linking.openURL(noticia.link)}
            >
              <Text style={stylesBase.buttonText}>Ler matéria completa</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Noticias;
