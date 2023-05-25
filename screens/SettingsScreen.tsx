// SettingsScreen.tsx
import React, { useContext, useState} from 'react';
import { ThemeContext } from 'styled-components';
import { Text, Switch, View} from 'react-native';
import { darkTheme } from '../themes/themes';
import { Container, StyledText } from './styles/SettingsScreen.styles.ts';

const SettingsScreen = ({toggleTheme}) => {
  const theme = useContext(ThemeContext);
  //isDarkMode - initial state based on if the current themes is darkTheme
  const [isDarkMode, setIsDarkMode] = useState(theme === darkTheme);



  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  }

  return (
    <Container>
      <StyledText>Dark Mode</StyledText>
      <Switch value={isDarkMode} onValueChange={handleToggle} />
    </Container>
  );
};

export default SettingsScreen;
