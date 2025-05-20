// src/styles/homeStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const homeStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: width - 55,   
    height: 340,        
    borderRadius: 20,     
    marginBottom: 20,
    marginTop:20,
  },
  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    color: colors.text,
fontFamily: 'Poppins_400Regular'  },

  headerTextContainer: {
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 20,
},

title: {
  fontSize: 28,
  fontWeight: 'bold',
  color:'#000000',
  fontFamily: 'Poppins_400Regular', 
},

subtitle: {
  fontSize: 14,
  marginTop: 4,
  textAlign: 'center',
  fontFamily: 'Poppins_400Regular',
},

descriptionContainer: {
  paddingHorizontal: 20,
  marginTop: 10,
},

description: {
  fontSize: 14,
  textAlign: 'justify',
  fontFamily: 'Poppins_400Regular',
},

infoBox: {
  padding: 16,
  borderRadius: 12,
  marginHorizontal: 20,
  marginTop: 20,
  borderWidth: 1,
  elevation: 2, 
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},

infoText: {
  fontSize: 16,
  lineHeight: 24,
  fontFamily: 'Poppins_400Regular', 
},

feedbackBox: {
  padding: 16,
  borderRadius: 12,
  marginHorizontal: 20,
  marginTop: 20,
  borderWidth: 1,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},

feedbackHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
},

feedbackIcon: {
  marginRight: 8,
},

feedbackTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  fontFamily: 'Poppins_400Regular',
},

feedbackText: {
  fontSize: 14,
  marginBottom: 12,
  lineHeight: 20,
  fontFamily: 'Poppins_400Regular',
},

feedbackButton: {
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: 'center',
},

feedbackButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
  fontFamily: 'Poppins_400Regular',
},

quoteTitleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
},

quoteLine: {
  width: 4,
  height: '100%', 
  backgroundColor: '#00FFFF',
  borderRadius: 2,
  marginRight: 12,
  alignSelf: 'stretch', 
},

quoteTitleText: {
  fontSize: 28,
  fontWeight: 'bold',
  fontFamily: 'Poppins_600SemiBold',
},



});

export default homeStyles;
