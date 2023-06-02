/*  ApiaryCard.tsx: component to display apiaries in the Apiaries Tab
*/
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainer, CardTitle, CardText } from './styles/CardContainer.styles';

// Apiary Interface: also used in the ApiariesScreen.tsx
export interface Apiary {
    name: string;
    hives: number;
    location: string;
    notes:  string;
}

interface ApiaryCardProps {
    item: Apiary;
    onPress: () => void;
}

const ApiaryCard = ({item, onPress}: ApiaryCardProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <CardContainer>
                <CardTitle>{item.name}</CardTitle>
                <CardText>Hives: {item.hives}</CardText>
                <CardText>Location: {item.location}</CardText>
                <CardText>Notes: {item.notes}</CardText>
            </CardContainer>
        </TouchableOpacity>
    );
};

export default ApiaryCard;