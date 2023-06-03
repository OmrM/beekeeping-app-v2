import React from 'react';
import { ButtonText, ButtonWrapper, CircleButton } from './styles/ActionButton.styles';

interface ActionButtonProps { 
  onPress: () => void;
};

const ActionButton = ({ onPress }: ActionButtonProps) => {

  return (
    <ButtonWrapper>
      <CircleButton onPress={onPress}>
        <ButtonText>+</ButtonText>
      </CircleButton>
    </ButtonWrapper>
  );
};

export default ActionButton;