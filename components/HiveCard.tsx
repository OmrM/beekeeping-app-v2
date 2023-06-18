/* HiveCard.tsx: component to display Hives in the Hives Tab 
*/

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainer, CardIcon, CardText, CardTextContainer, CardTitle } from './styles/CardContainer.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

export interface Hive {
    id: string;
    name: string;
    bees: number;
    health: string;
    image: string;
    notes: string;
}

interface HiveCardProps {
    item: Hive;
    onPress: () => void;
}
const HiveCard = ({ item, onPress }: HiveCardProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <CardContainer>
                {/* Render image if it exits, else render the default icon */}
                {item.image !== null ? (
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 30, height: 30, borderRadius: 25}}
                    />
                ) : (
                    <CardIcon name="beehive-outline" size={25}/>
                )}
                <CardTextContainer>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>Bees: {item.bees}</CardText>
                    <CardText>Health: {item.health}</CardText>
                    <CardText>Notes: {item.notes}</CardText>
                </CardTextContainer>
            </CardContainer>
        </TouchableOpacity>
    )
}

export default HiveCard;