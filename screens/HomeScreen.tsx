// /screens/HomeScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { Container, StyledText } from './styles/SettingsScreen.styles'

interface Props {
  toggleTheme: () => void;
}
//const HomeScreen: React.FC<Props> = ({toggleTheme}) => {}
const HomeScreen = ({ toggleTheme }: Props) => {
  return (
    <Container>
      <StyledText>Home Screen</StyledText>
    </Container>
  );
};

export default HomeScreen;
