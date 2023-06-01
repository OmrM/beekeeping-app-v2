import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyledText, Container, CardContainer, CardText, CardTitle } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Let's simulate data from the server
const hives = [
  { id: '1', name: 'Hive 1', bees: 3000, health: 'Good', imageUrl: '', notes: 'Produces wildflower honey.' },
  { id: '2', name: 'Hive 2', bees: 5000, health: 'Excellent', imageUrl: '', notes: 'Strong queen bee.' },
  //... more hives
];

interface HivesScreenProps {
  item: {
    id: string;
    name: string;
    bees: string;
    health: string;
    notes: string;
    imageUrl: string;
  };
};

const HivesScreen = ({navigation}: any) => {
  const hiveCard = ({ item }: HivesScreenProps) => (
    <TouchableOpacity onPress={() => navigation.navigate('Hive Details', {id:item.id})}>
      <CardContainer style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Render the image if exists, else render the default icon */}
        {item.imageUrl !== ''
          ? <Image source={{ uri: item.imageUrl }} style={{ width: 30, height: 30, borderRadius: 25 }} />
          : <MaterialCommunityIcons name="beehive-outline" size={30} color="black" />
        }
        <View style={{ marginLeft: 10 }}>
          <CardTitle>{item.name}</CardTitle>
          <CardText>Bees: {item.bees}</CardText>
          <CardText>Health: {item.health}</CardText>
          <CardText>Notes: {item.notes}</CardText>
        </View>
      </CardContainer>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={hives}
        renderItem={hiveCard}
        keyExtractor={item => item.id}
      />
      <ActionButton />
    </Container>
  );
};


export default HivesScreen;
