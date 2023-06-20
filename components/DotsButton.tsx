import React from 'react';

import { Pressable, Touchable, TouchableOpacity } from 'react-native';

import { DotsIcon } from './styles/CardContainer.styles';

interface DotsButtonProps {
    onPress: () => void,
    onDotsPress: () => void,
}

const DotsButton = ({ onPress }: DotsButtonProps) => {
    return (
        <TouchableOpacity onPress={(event) => { event.stopPropagation(); onPress(); }}>
            <DotsIcon name="dots-horizontal" />
        </TouchableOpacity>
    );
};

export default DotsButton;