import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';
import { RefreshControl } from 'react-native-gesture-handler';
import HiveCard, { Hive } from '../components/HiveCard';
import { ListHivesQuery } from '../src/API';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { listHives } from '../src/graphql/queries';
import { useIsFocused } from '@react-navigation/native';
// Let's simulate data from the server
/* const hives = [
  { id: '1', name: 'Hive 1', bees: 3000, health: 'Good', imageUrl: '', notes: 'Produces wildflower honey.' },
  { id: '2', name: 'Hive 2', bees: 5000, health: 'Excellent', imageUrl: '', notes: 'Strong queen bee.' },
  //... more hives
];
 */


const HivesScreen = ({ navigation }: any) => {
  const [hives, setHives] = useState<Hive[]>([]);
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getHives();
  }, [isFocused]);
  // Refresh control function: 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getHives();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000)
  }, []);


  const getHives = async () => {
    try {
      const hiveData = await API.graphql<GraphQLQuery<ListHivesQuery>>({ query: listHives });
      const hiveDataItems = hiveData.data?.listHives?.items ?? [];
      console.log(JSON.stringify(hiveDataItems));
      //set apiary data, will be used in flatlist below
      setHives(hiveDataItems as unknown as Hive[]);
    } catch (error) {
      console.log("Error fetching hives", error);
    }
  };

  const handleActionBttnPress = async () => {
    navigation.navigate("New Hive");
  }
  /* custom render function for the HiveCard */
  const renderHiveCard = ({ item }: { item: Hive }) => {
    const handleHiveCardPress = () => {
      // navigating to details screen and passing hive id
      navigation.navigate('Hive Details', { id: item.id });
    }
    return <HiveCard item={item} onPress={handleHiveCardPress} />;
  }
  return (
    <Container>
      <FlatList
        data={hives}
        renderItem={renderHiveCard}
        keyExtractor={item => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <ActionButton onPress={handleActionBttnPress} />
    </Container>
  );
};


export default HivesScreen;
