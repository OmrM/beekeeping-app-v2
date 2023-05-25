// SettingsScreen.tsx
import React, { useContext, useState} from 'react';
import { ThemeContext } from 'styled-components';
import { Text, Switch, View} from 'react-native';
import { darkTheme } from '../themes/themes';

const SettingsScreen = ({toggleTheme}) => {
  const theme = useContext(ThemeContext);
  //isDarkMode - initial state based on if the current themes is darkTheme
  const [isDarkMode, setIsDarkMode] = useState(theme === darkTheme);



  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  }

  return (
    <View style={{ backgroundColor: theme.background, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: theme.text }}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={handleToggle} />
    </View>
  );
};

export default SettingsScreen;
