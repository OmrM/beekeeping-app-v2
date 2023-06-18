import React from 'react';
import { CardContainer, CardText, CardTextContainer, CardTitle } from './styles/CardContainer.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';


const InspectionCard = ({item, onPress}) => {
    const formattedDate = new Date(item.date).toLocaleDateString();
    return(
        <TouchableOpacity onPress={onPress}>
            <CardContainer>
                <CardTextContainer>
                <CardTitle>{formattedDate}</CardTitle>
                <CardText>{item.notes}</CardText>
                {/* TODO: Add images container. might need to make an image component */}
                </CardTextContainer>
            </CardContainer>
        </TouchableOpacity>
    );
};

export default InspectionCard;