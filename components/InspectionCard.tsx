import React from 'react';
import { CardContainer, CardIcon, CardText, CardTextContainer, CardTitle, DotsIcon, MenuOptionIcon, MenuOptionText, MenuOptnContainer, } from './styles/CardContainer.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DotsButton from './DotsIcon';
import { TouchableWithoutFeedback, View } from 'react-native';
import DotsButtonIcon from './DotsIcon';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { ScreenText } from '../screens/styles/Screens.styles';
import { transparent } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
interface InspectionCardProps {
    item: object;
    onPress: () => void;
}

const InspectionCard = ({ item, onPress }: InspectionCardProps) => {
    const formattedDate = new Date(item.date).toLocaleDateString();
    //TODO: Delete record using the item.id
    // TODO: navigate to a page to EDIT, might be able to reuse NewInspectionScreen
    const handleDelete = () => {
        console.log("deleting", item.notes, item.id)
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
                            <MenuOptionIcon name="pencil-outline"/>
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


