import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from './src/context/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
