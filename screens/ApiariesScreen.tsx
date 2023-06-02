import React from 'react';
import { FlatList, } from 'react-native';
import { Container } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';

import ApiaryCard from '../components/ApiaryCard';
import { Apiary } from '../components/ApiaryCard';
// Let's simulate a data from the server
const apiaries = [
  { id: '1', name: 'Apiary 1', hives: 5, location: 'Farmville, VA', notes: 'Beside the apple orchard.' },
  { id: '2', name: 'Apiary 2', hives: 3, location: 'Lynchburg, VA', notes: 'Next to the creek.' },
  //... more apiaries
];

const ApiariesScreen = () => {
  /* custom render function for the ApiaryCard component */
  const renderApiaryCard = ({ item }: { item: Apiary }) => {
    const handleApiaryCardPress = () => {
      console.log("card pressed", item.name);
    }

    return (
      /* ApiaryCard takes in a prop onPress, takes in handleApiaryCardPress from this render function */
      <ApiaryCard item={item} onPress={handleApiaryCardPress} />
    );
  };


  return (
    <Container>
      <FlatList
        data={apiaries}
        renderItem={renderApiaryCard}
        keyExtractor={item => item.id}
      />
      <ActionButton />
    </Container>
  );
};


export default ApiariesScreen;

