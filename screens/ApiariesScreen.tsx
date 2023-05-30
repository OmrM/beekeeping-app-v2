import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StyledText, Container, CardContainer, CardText, CardTitle } from './styles/Screens.styles';

// Let's simulate a data from the server
const apiaries = [
  { id: '1', name: 'Apiary 1', hives: 5, location: 'Farmville, VA', notes: 'Beside the apple orchard.' },
  { id: '2', name: 'Apiary 2', hives: 3, location: 'Lynchburg, VA', notes: 'Next to the creek.' },
  //... more apiaries
];

const ApiariesScreen = () => {
  const apiaryCard = ({ item }) => (
    <CardContainer>
      <CardTitle>{item.name}</CardTitle>
      <CardText>Hives: {item.hives}</CardText>
      <CardText>Location: {item.location}</CardText>
      <CardText>Notes: {item.notes}</CardText>
    </CardContainer>
  );

  return (
    <Container>
      <FlatList
        data={apiaries}
        renderItem={apiaryCard}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};


export default ApiariesScreen;
