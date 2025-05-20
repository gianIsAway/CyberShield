import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 12,
  textAlign: 'center', 
},
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingBottom: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    marginVertical: 5,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  textArea: {
    fontSize: 15,
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  image: {
  width: '100%',
  height: 280,
  borderRadius: 20,
  marginVertical: 16,
},

      

});
