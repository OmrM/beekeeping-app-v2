import React from 'react';
import { View, Text } from 'react-native';
import { StyledText, Container } from './styles/settingsScreen.styles';

interface Props {
  toggleTheme: () => void;
}

const ApiariesScreen = ({ toggleTheme }: Props) => {
  return (
    <Container>
      <StyledText>Apiaries Screen</StyledText>
    </Container>
  );
};

export default ApiariesScreen;
