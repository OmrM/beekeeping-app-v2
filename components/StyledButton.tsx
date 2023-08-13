import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
interface StyledButtonProps{
    children: any;
    onPress: () => void;
}
const StyledButton = ({ children, onPress, ...props }: StyledButtonProps) => {
    const theme = useTheme();

    return (
        <PaperButton
            mode={'contained'}
            onPress={onPress}
            style={{ 
                backgroundColor: theme?.button.backgroundColor,
            }}
            textColor={theme?.button.textColor}
            {...props}
        >
            {children}
        </PaperButton>
    );
};

export default StyledButton;