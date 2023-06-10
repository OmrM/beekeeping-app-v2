import React, { useEffect, useState } from 'react';
import { FlatList, } from 'react-native';
import { Container } from './styles/Screens.styles';
import ActionButton from '../components/ActionButton';

import ApiaryCard from '../components/ApiaryCard';
import { Apiary } from '../components/ApiaryCard';
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api';
import { CreateApiaryInput, CreateApiaryMutation, GetApiaryQuery, ListApiariesQuery,  } from '../src/API';
import { createApiary } from '../src/graphql/mutations';
import { listApiaries } from '../src/graphql/queries';
import { useIsFocused } from '@react-navigation/native';
import { RefreshControl } from 'react-native-gesture-handler';

interface ApiariesScreenProps {
  navigation:{
    navigate: Screen;
  }
}

const ApiariesScreen = ({navigation}: ApiariesScreenProps) => {
  const [apiaries, setApiaries] = useState<Apiary[]>([]); // setting it as the type Apiary from our card component
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    // Listener method https://stackoverflow.com/questions/46504660/refresh-previous-screen-on-goback
    isFocused && getApiaries();
  }, [isFocused]);

  // Refresh control function: 
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getApiaries();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000)
  }, []);

  const getApiaries = async () => {
    try{
      const apiaryData = await API.graphql<GraphQLQuery<ListApiariesQuery>>({ query: listApiaries });
      const apiaryDataItems = apiaryData.data?.listApiaries?.items ?? [];
      console.log(JSON.stringify(apiaryDataItems))
      setApiaries(apiaryDataItems as unknown as Apiary[]);
    } catch (error) {
      console.error('Error fetching apiaries', error);
    }
  };

  const handleActionBttnPress = async () => {
    navigation.navigate("New Apiary")
  };

  /* custom render function for the ApiaryCard component 
      { item: Apiary } -- destructuring the item property
      and specifying its type as the 'Apiary' interface
      this allows direct access to item and enforces type checking
  */
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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      <ActionButton onPress={handleActionBttnPress} />
    </Container>
  );
};


export default ApiariesScreen;

