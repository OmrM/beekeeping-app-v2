/* ActionButtons.styles.ts */

import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
    position: absolute;
    right: 30px;
    bottom: 30px;
`;

export const CircleButton = styled.Pressable`
    width: 60px;
    height: 60px;
    background-color: ${ ({theme}) => theme.activeColor};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const ButtonText = styled.Text`
    color: ${ ({theme}) => theme.textColor};
    font-size: 30px;
    text-align: center;
`;