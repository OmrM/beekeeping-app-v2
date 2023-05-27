import React from 'react';
import { View, Text } from 'react-native';
import { Container, StyledText } from './styles/SettingsScreen.styles';
interface Props {
  toggleTheme: () => void;
}

const AlertsScreen = ({ toggleTheme }: Props) => {
  return (
    <Container>
      <StyledText>Alerts Screen</StyledText>
    </Container>
  );
};

export default AlertsScreen;
