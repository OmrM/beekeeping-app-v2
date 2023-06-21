import React, { useState } from 'react';
import { CardContainer, CardText, CardTextContainer, CardTitle, MenuOptionIcon, MenuOptionText, MenuOptnContainer, } from './styles/CardContainer.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DotsButtonIcon from './DotsIcon';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { DeleteInspectionInput, DeleteInspectionMutation, InspectionsByHiveIDAndDateQuery } from '../src/API';
import { deleteInspection } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { useNavigation } from '@react-navigation/native';
import { inspectionsByHiveIDAndDate } from '../src/graphql/queries';
interface InspectionCardProps {
    item: object;
    onPress: () => void;
    refreshInspections: () => void;
    navigation: any;
    inspections: Array<any>; // Add this
    setInspections: React.Dispatch<React.SetStateAction<any[]>>; 
}

const InspectionCard = ({ item, onPress, refreshInspections, inspections, setInspections }: InspectionCardProps) => {
    const navigation = useNavigation();
    const formattedDate = new Date(item.date).toLocaleDateString();
    //TODO: Delete record using the item.id
    // TODO: navigate to a page to EDIT, might be able to reuse NewInspectionScreen

    const handleDelete = async () => {
        try {
            await deleteFunction();
            // filter out the deleted item from inspections array
            const updatedInspections = inspections.filter(inspection => inspection.id !== item.id);
            updatedInspections.sort((a, b) => new Date(b.date) - new Date(a.date));
            const lastInspectionDate = updatedInspections[0]?.date;
            console.log("Last inspection date: ", lastInspectionDate);
            // Update the inspections state
            setInspections(updatedInspections);
        } catch (error) {
            console.log("Error during deletion: ", error);
        }
    };

    const deleteFunction = async () => {
        console.log("deleting", item.notes, item.id);
        const inspectionDetails: DeleteInspectionInput = {
            id: item.id,
        };
        try {
            await API.graphql<GraphQLQuery<DeleteInspectionMutation>>({
                query: deleteInspection,
                variables: { input: inspectionDetails },
            });
        } catch (error) {
            console.log(error);
        }
    };


    
    return (

        <CardContainer>

            <CardTextContainer >
                <TouchableOpacity onPress={onPress}>
                    <CardTitle>{formattedDate}</CardTitle>
                    <CardText>{item.notes}</CardText>
                    {/* TODO: Add images container. might need to make an image component */}
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
                    <MenuOption onSelect={() => navigation.navigate('New Inspection', { inspection: item })}>
                        <MenuOptnContainer>
                            <MenuOptionText>Edit</MenuOptionText>
                            <MenuOptionIcon name="pencil-outline" />
                        </MenuOptnContainer>
                    </MenuOption>
                    <MenuOption onSelect={handleDelete}>
                        <MenuOptnContainer>
                            <MenuOptionText style={{ color: 'red' }}>Delete</MenuOptionText>
                            <MenuOptionIcon name="trash-can-outline" style={{ color: 'red' }} />
                        </MenuOptnContainer>
                    </MenuOption>
                </MenuOptions>
            </Menu>

        </CardContainer>

    );
};

export default InspectionCard;


