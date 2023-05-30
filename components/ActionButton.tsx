import React from 'react';
import { ButtonText, ButtonWrapper, CircleButton } from './styles/ActionButton.styles';

const ActionButton = () => {

    return (
        <ButtonWrapper>
        <CircleButton onPress={() => navigation.navigate('New Apiary')}>
          <ButtonText>+</ButtonText>
        </CircleButton>
      </ButtonWrapper>
    );
};

export default ActionButton;