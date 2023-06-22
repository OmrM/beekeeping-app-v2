/* HiveCard.tsx: component to display Hives in the Hives Tab 
*/

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainer, CardIcon, CardText, CardTextContainer, CardTitle, MenuOptionIcon, MenuOptionText, MenuOptnContainer } from './styles/CardContainer.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import DotsButtonIcon from './DotsIcon';

export interface Hive {
    id: string;
    name: string;
    bees: number;
    health: string;
    image: string;
    notes: string;
    lastInspectionDate: string;
}

interface HiveCardProps {
    item: Hive;
    onPress: () => void;
}
const HiveCard = ({ item, onPress }: HiveCardProps) => {
    const formattedDate = item.lastInspectionDate ? new Date(item.lastInspectionDate).toLocaleDateString() : null;
    return (
        <TouchableOpacity onPress={onPress}>
            <CardContainer>
                {/* Render image if it exits, else render the default icon */}
                {item.image !== null ? (
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 30, height: 30, borderRadius: 25 }}
                    />
                ) : (
                    <CardIcon name="beehive-outline" size={25} />
                )}
                <CardTextContainer>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>Bees: {item.bees}</CardText>
                    <CardText>Health: {item.health}</CardText>
                    <CardText>Notes: {item.notes}</CardText>
                    <CardText>Last Inspection: {formattedDate ? formattedDate : "None"} </CardText>
                </CardTextContainer>
                <Menu>
                    <MenuTrigger>
                        <DotsButtonIcon />
                    </MenuTrigger>
                    <MenuOptions
                        customStyles={{
                            optionsContainer: {
                                borderRadius: 5,
                                backgroundColor: 'transparent',
                                borderColor: 'transparent', // or the color you want
                                borderWidth: 0,

                            },
                        }}
                    >
                        <MenuOption onSelect={undefined}>
                            <MenuOptnContainer>
                                <MenuOptionText>Edit</MenuOptionText>
                                <MenuOptionIcon name="pencil-outline" />
                            </MenuOptnContainer>
                        </MenuOption>
                        <MenuOption onSelect={undefined}>
                            <MenuOptnContainer>
                                <MenuOptionText style={{ color: 'red' }}>Delete</MenuOptionText>
                                <MenuOptionIcon name="trash-can-outline" style={{ color: 'red' }} />
                            </MenuOptnContainer>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </CardContainer>
        </TouchableOpacity>
    )
}

export default HiveCard;