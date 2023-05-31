import React from 'react';
import { FlatList, } from 'react-native';
import { StyledText, Container, CardContainer, CardText, CardTitle } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Let's simulate a data from the server
const apiaries = [
  { id: '1', name: 'Apiary 1', hives: 5, location: 'Farmville, VA', notes: 'Beside the apple orchard.' },
  { id: '2', name: 'Apiary 2', hives: 3, location: 'Lynchburg, VA', notes: 'Next to the creek.' },
  //... more apiaries
];

interface Props {
  item: {
    name: string;
    hives: string;
    location: string;
    notes: string;
  };
};

const ApiariesScreen = () => {
  const apiaryCard = ({ item }: Props) => (
    <TouchableOpacity onPress={()=>console.log("pressed")}>
      <CardContainer>
        <CardTitle>{item.name}</CardTitle>
        <CardText>Hives: {item.hives}</CardText>
        <CardText>Location: {item.location}</CardText>
        <CardText>Notes: {item.notes}</CardText>
      </CardContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={apiaries}
        renderItem={apiaryCard}
        keyExtractor={item => item.id}
      />
      <ActionButton />
    </Container>
  );
};


export default ApiariesScreen;

