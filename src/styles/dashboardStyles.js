import { StyleSheet } from 'react-native';

const createDashboardStyles = (isDarkMode) => {
  const colors = {
    background: isDarkMode ? '#121212' : '#ffffff',
    card: isDarkMode ? '#1e1e1e' : '#f4f4f4',
    text: isDarkMode ? '#ffffff' : '#000000',
    title: isDarkMode ? '#ffffff' : '#000000',
    border: isDarkMode ? '#333' : '#ccc',
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
      paddingBottom: 40,
    },
    section: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.border,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.title,
      marginBottom: 8,
    },
    sectionText: {
      fontSize: 15,
      color: colors.text,
      lineHeight: 22,
    },
    highlightBox: {
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 12,
      marginVertical: 6,
      borderWidth: 1,
      borderColor: colors.border,
    },
    highlightText: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '500',
    },
    chartContainer: {
      alignItems: 'center',
      marginTop: 16,
    },
    chartTitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 6,
      textAlign: 'center',
    },
  });
};

export default createDashboardStyles;
