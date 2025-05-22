import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../context/ThemeContext';
import stylesBase from '../styles/denunciaStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { salvarDenuncia } from '../lib/supabaseClient';

const Denuncia = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const colors = {
    background: isDarkMode ? '#121212' : '#f4f4f4',
    card: isDarkMode ? '#1E1E1E' : '#ffffff',
    text: isDarkMode ? '#fff' : '#000',
    border: isDarkMode ? '#444' : '#ccc',
    button: isDarkMode ? '#333' : '#000',
  };

  const [form, setForm] = useState({
    faixaEtaria: '',
    periodo: '',
    tipoViolacao: '',
    plataforma: '',
    impacto: '',
    foiReportada: '',
    descricao: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleEnviarDenuncia = async () => {
    console.log('Enviando denúncia com dados:', form);

    const {
      faixaEtaria,
      periodo,
      tipoViolacao,
      plataforma,
      impacto,
      foiReportada,
      descricao,
    } = form;

    if (
      !faixaEtaria ||
      !periodo ||
      !tipoViolacao ||
      !plataforma ||
      !impacto ||
      !foiReportada ||
      !descricao.trim()
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const dadosFormatados = {
      faixa_etaria: faixaEtaria,
      periodo,
      tipo_violacao: tipoViolacao,
      plataforma,
      impacto,
      foi_reportada: foiReportada,
      descricao,
    };

    try {
      const resposta = await salvarDenuncia(dadosFormatados);
      console.log('Resposta do Supabase:', resposta);

      if (resposta.error) {
        Alert.alert('Erro', 'Falha ao enviar denúncia: ' + resposta.error.message);
      } else {
        Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
        setForm({
          faixaEtaria: '',
          periodo: '',
          tipoViolacao: '',
          plataforma: '',
          impacto: '',
          foiReportada: '',
          descricao: '',
        });
      }
    } catch (error) {
      console.error('Erro de rede ou Supabase:', error);
      Alert.alert('Erro', 'Erro ao enviar denúncia. Verifique sua conexão.');
    }
  };

  const perguntas = [
  {
    label: 'Selecione sua faixa etária',
    field: 'faixaEtaria',
    opcoes: ['Menor de 18 anos', '18-25 anos', '26-30 anos', '31-38 anos', '38-45 anos', '46-55 anos','Acima de 55 anos'],
  },
  {
    label: 'Período em que ocorreu a violação',
    field: 'periodo',
    opcoes: ['Última semana', 'Último mês', 'Últimos 3 meses', 'Mais de 3 meses'],
  },
  {
    label: 'Tipo de violação sofrida ou testemunhada',
    field: 'tipoViolacao',
    opcoes: [
  'Cyberbullying',
  'Assédio',
  'Privacidade',
  'Discurso de ódio',
  'Fraude',
  'Spam',
  'Ameaça',
  'Outro',
    ],
  },
  {
    label: 'Plataforma onde ocorreu',
    field: 'plataforma',
    opcoes: ['Instagram', 'Facebook', 'WhatsApp', 'Twitter/X', 'TikTok', 'Outra'],
  },
  {
    label: 'Principal impacto sofrido',
    field: 'impacto',
    opcoes: [
  'Emocional',
  'Psicológico',
  'Financeiro',
  'Reputação',
  'Social',
  'Segurança',
  'Outro',
],
  },
  {
    label: 'A violação foi reportada à plataforma ou autoridades?',
    field: 'foiReportada',
    opcoes: ['Sim', 'Não', 'Prefiro não dizer'],
  },
];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <Text style={[stylesBase.title, { color: colors.text }]}>Registrar Denúncia</Text>

        <Image
          source={require('../images/denuncia.png')}
          style={stylesBase.image}
          resizeMode="cover"
        />

        <Text style={[stylesBase.description, { color: colors.text }]}>
          Cadastramento de Violação: Registre de forma anônima relatos sobre cyberbullying, assédio,
          invasões de privacidade, etc. Esses dados ajudam a criar indicadores e políticas de prevenção.
        </Text>

        {perguntas.map(({ label, field, opcoes }) => (
          <View key={field} style={[stylesBase.pickerContainer, { borderColor: colors.border }]}>
            <Text style={[stylesBase.label, { color: colors.text }]}>{label}</Text>
            <Picker
              selectedValue={form[field]}
              style={{ color: colors.text }}
              dropdownIconColor={colors.text}
              onValueChange={(value) => handleChange(field, value)}
            >
              <Picker.Item label="Selecione uma opção..." value="" />
              {opcoes.map((opcao) => (
                <Picker.Item key={opcao} label={opcao} value={opcao} />
              ))}
            </Picker>
          </View>
        ))}

        <View style={[stylesBase.textAreaContainer, { borderColor: colors.border }]}>
          <Text style={[stylesBase.label, { color: colors.text }]}>Descreva a violação ocorrida:</Text>
          <TextInput
            multiline
            numberOfLines={5}
            style={[stylesBase.textArea, { color: colors.text }]}
            value={form.descricao}
            onChangeText={(text) => handleChange('descricao', text)}
            placeholder="Digite aqui..."
            placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          />
        </View>

        <TouchableOpacity
          style={[stylesBase.button, { backgroundColor: colors.button }]}
          onPress={handleEnviarDenuncia}
        >
          <Text style={stylesBase.buttonText}>Enviar Denúncia</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Denuncia;
