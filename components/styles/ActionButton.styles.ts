/* ActionButtons.styles.ts */

import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

export const CircleButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${ ({theme}) => theme.button.backgroundColor};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    elevation: 3; 
    ${Platform.OS === 'ios' && `
        shadow-color: black;
        shadow-radius: 10px;
        shadow-opacity: 0.2;
    `}
`;

export const ButtonText = styled.Text`
    color: ${ ({theme}) => theme.button.textColor};
    font-size: 24px;
`;

/* shadowColor: 'black',
shadowRadius: 10,
shadowOpacity: 0.2,
shadowOffset: {width: 0 , height: 4}, */