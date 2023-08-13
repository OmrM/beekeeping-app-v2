import React from 'react';
import {TextInput} from 'react-native-paper';
import { InputContainer } from './styles/StyledInput.styles';
import { useTheme } from 'styled-components/native';

interface StyledInputProps {
    label: string;
    value: string;
    onChangeText: (val: string) => void;
    multiline: boolean;
}

const StyledInput = ({label, value, onChangeText, multiline}: StyledInputProps) => {
    const theme = useTheme();
    return(
        <InputContainer>
            <TextInput
                label={label}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                mode="outlined"
                selectionColor={theme?.activeColor}
                outlineColor="gray"
                activeOutlineColor={theme?.activeColor}
                activeUnderlineColor={theme?.activeColor}
                
                textColor={theme?.textColor}
                style={{
                    backgroundColor:theme?.background,
                }}
                

            />
        </InputContainer>
    )
}

export default StyledInput;