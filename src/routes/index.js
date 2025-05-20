import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Informacoes from '../pages/Informacoes';
import Noticias from '../pages/Noticias';
import Denuncia from '../pages/Denuncia';
import Dashboard from '../pages/Dashboard';
import { useTheme } from '../context/ThemeContext';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const Routes = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#121212' : '#f4f4f4',
        },
        headerTintColor: isDarkMode ? '#fff' : '#000',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'CyberShield',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Image
              source={require('../images/cybershield_logo.png')}
              style={{ width: 50, height: 50, marginLeft: 15, borderRadius: 6 }}
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
              <Icon
                name={isDarkMode ? 'sun-o' : 'moon-o'}
                size={22}
                color={isDarkMode ? '#fff' : '#000'}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
  name="Informacoes"
  component={Informacoes}
  options={({ navigation }) => ({
    title: 'Informações',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            size={22}
            color={isDarkMode ? '#fff' : '#000'}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/cybershield_logo.png')}
          style={{ width: 40, height: 40, borderRadius: 6 }}
        />
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={22}
          color={isDarkMode ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    ),
  })}
/>

<Stack.Screen
  name="Noticias"
  component={Noticias}
  options={({ navigation }) => ({
    title: 'Notícias',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            size={22}
            color={isDarkMode ? '#fff' : '#000'}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/cybershield_logo.png')}
          style={{ width: 40, height: 40, borderRadius: 6 }}
        />
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={22}
          color={isDarkMode ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    ),
  })}
/>
      <Stack.Screen
  name="Denuncia"
  component={Denuncia}
  options={({ navigation }) => ({
    title: 'Denúncia',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            size={22}
            color={isDarkMode ? '#fff' : '#000'}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/cybershield_logo.png')}
          style={{ width: 40, height: 40, borderRadius: 6 }}
        />
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={22}
          color={isDarkMode ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    ),
  })}
/>
      <Stack.Screen
  name="Dashboard"
  component={Dashboard}
  options={({ navigation }) => ({
    title: 'Dashboard',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="arrow-left"
            size={22}
            color={isDarkMode ? '#fff' : '#000'}
            style={{ marginLeft: 15, marginRight: 10 }}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/cybershield_logo.png')}
          style={{ width: 40, height: 40, borderRadius: 6 }}
        />
      </View>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
        <Icon
          name={isDarkMode ? 'sun-o' : 'moon-o'}
          size={22}
          color={isDarkMode ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    ),
  })}
/>
    </Stack.Navigator>
  );
};

export default Routes;
