import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { LogBox } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // Ignore log notification by message
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
Amplify.configure({
  ...awsconfig,
  Storage: {
    AWSS3: {
      region: 'us-west-2', // Replace with your AWS region
    },
  },
});


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
      <MenuProvider>
        {/*  <StatusBar style='auto'/> */}
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
        <NavigationContainer>
          {/* import top level navigator here */}
          <BottomTabNavigator toggleTheme={toggleTheme} />
        </NavigationContainer>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
