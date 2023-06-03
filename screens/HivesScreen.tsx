import React from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyledText, Container, CardContainer, CardText, CardTitle } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HiveCard, { Hive } from '../components/HiveCard';
// Let's simulate data from the server
const hives = [
  { id: '1', name: 'Hive 1', bees: 3000, health: 'Good', imageUrl: '', notes: 'Produces wildflower honey.' },
  { id: '2', name: 'Hive 2', bees: 5000, health: 'Excellent', imageUrl: '', notes: 'Strong queen bee.' },
  //... more hives
];



const HivesScreen = ({navigation}: any) => {
  /* custom render function for the HiveCard */
  const renderHiveCard = ({item}: {item:Hive}) => {
    const handleHiveCardPress = () => {
      navigation.navigate('Hive Details', {id: item.id});
    }
    return <HiveCard item={item} onPress={handleHiveCardPress}/>;
  }


  return (
    <Container>
      <FlatList
        data={hives}
        renderItem={renderHiveCard}
        keyExtractor={item => item.id}
      />
      <ActionButton onPress={() => console.log("action pressed")}/>
    </Container>
  );
};


export default HivesScreen;
