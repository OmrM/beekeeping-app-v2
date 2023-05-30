import React from 'react';
import { Container, StyledText } from './styles/Screens.styles';

interface Props {
  toggleTheme: () => void;
}

const HivesScreen = ({ toggleTheme }: Props) => {
  return (
    <Container>
      <StyledText>Hives Screen</StyledText>
    </Container>
  );
};

export default HivesScreen;
