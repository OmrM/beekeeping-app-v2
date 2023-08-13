/* HiveCard.tsx: component to display Hives in the Hives Tab 
*/

import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainer, CardIcon, CardText, CardTextContainer, CardTitle, MenuOptionIcon, MenuOptionText, MenuOptnContainer } from './styles/CardContainer.styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, Image } from 'react-native';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import DotsButtonIcon from './DotsIcon';
import { useNavigation } from '@react-navigation/native';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { DeleteHiveMutation } from '../src/API';

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
    navigation = useNavigation();
    const formattedDate = item.lastInspectionDate ? new Date(item.lastInspectionDate).toLocaleDateString() : null;

    const handleEdit = () => {
        console.log("editing Hive");
        navigation.navigate('New Hive')
    };

    const confirmDelete = () => {
        Alert.alert('Delete ' + item.name + '?', 'This will delete Hive and all inspection records!', [
            {
                text:'Cancel',
            },
            {
                text: 'Delete Hive',
                onPress: handleDelete,
            },
        ]);
    };

    const handleDelete = async () => {
        console.log("deleting hive");
        try{
            //await API.graphql<GraphQLQuery<DeleteHiveMutation
        } catch (error) {

        };
    }
    return (

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
                <TouchableOpacity onPress={onPress}>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>Bees: {item.bees}</CardText>
                    <CardText>Health: {item.health}</CardText>
                    <CardText>Notes: {item.notes}</CardText>
                    <CardText>Last Inspection: {formattedDate ? formattedDate : "None"} </CardText>
                </TouchableOpacity>
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
                    <MenuOption onSelect={handleEdit}>
                        <MenuOptnContainer>
                            <MenuOptionText>Edit</MenuOptionText>
                            <MenuOptionIcon name="pencil-outline" />
                        </MenuOptnContainer>
                    </MenuOption>
                    <MenuOption onSelect={confirmDelete}>
                        <MenuOptnContainer>
                            <MenuOptionText style={{ color: 'red' }}>Delete</MenuOptionText>
                            <MenuOptionIcon name="trash-can-outline" style={{ color: 'red' }} />
                        </MenuOptnContainer>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </CardContainer>
        
    )
}

export default HiveCard;