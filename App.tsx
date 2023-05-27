import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



//theming dependencies:
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './themes/themes';
import BottomTabNavigator from './navigation/BottomTabNavigator';


const App = () => {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // The function we pass to 'setTheme' receives the current theme state.
    // if light: return dark
    // else: return light
    setTheme((theme) => theme === 'light' ? 'dark' : 'light');
  };
  //choose which theme gets passed to the provider. based on 'theme' state
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;


  return (
    // Wrap the entire app with the ThemeProvider component and pass the selected theme as a prop
    <ThemeProvider theme={selectedTheme} >
      <StatusBar style='auto'/>
      <NavigationContainer>
        {/* import top level navigator here */}
        <BottomTabNavigator toggleTheme={toggleTheme} />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
