import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 16,
    padding: 16,
    margin: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardTexto: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius:20,
  },
});
