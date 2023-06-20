import React from 'react';
import { CardContainer, CardText, CardTextContainer, CardTitle, MenuOptionIcon, MenuOptionText, MenuOptnContainer, } from './styles/CardContainer.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DotsButtonIcon from './DotsIcon';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { DeleteInspectionInput, DeleteInspectionMutation } from '../src/API';
import { deleteInspection } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
interface InspectionCardProps {
    item: object;
    onPress: () => void;
    refreshInspections: () => void;
}

const InspectionCard = ({ item, onPress, refreshInspections }: InspectionCardProps) => {
    const formattedDate = new Date(item.date).toLocaleDateString();
    //TODO: Delete record using the item.id
    // TODO: navigate to a page to EDIT, might be able to reuse NewInspectionScreen

    const handleDelete = async () => {
        try {
          await deleteFunction();
          refreshInspections();
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
                    <MenuOption onSelect={undefined}>
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


