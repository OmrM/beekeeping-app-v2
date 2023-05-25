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
    // If current theme is 'light', it will return 'dark'
    // If current theme is not 'light', it will return 'light'
    setTheme((theme) => theme === 'light' ? 'dark' : 'light');
  };
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;


  return (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
