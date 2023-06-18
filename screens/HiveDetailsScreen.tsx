import React, { useEffect, useState } from 'react';
import { StyledText, Container } from './styles/Screens.styles';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetHiveQuery } from '../src/API';
import { getHive } from '../src/graphql/queries';
import HiveCard from '../components/HiveCard';
import ActionButton from '../components/ActionButton';

interface Hive {
  id: string;
  name: string;
  type: 'Langstroth' | 'Top-bar' | 'Warre';
  strength: string;
  lastInspection: {
    date: string | undefined;
    notes: string;
  };
  queenStatus: string;
  activities: Array<{
    activity: string;
    date: | undefined;
  }>;
  harvests: Array<{
    date: string;
    quantity: number;
    quality: string;
  }>;
  treatments: Array<{
    date: string | undefined;
    medication: string;
    dosage: string;
  }>;
};

interface HiveDetailProps {
  route: {
    params: {
      id: string;
    };
  };
};

const HiveDetailsScreen = ({ navigation, route }: HiveDetailProps) => {
  const [hiveDetails, setHiveDetails] = useState<Hive | null>(null);

  useEffect(() => {
    //console.log(JSON.stringify(hiveData.));
    //setHiveDetails(hiveData);
    //setHiveDetails(fetchedHiveDetails)
    fetchHive();
  }, [route.params.id]);


  const fetchHive = async () => {
    try {
      console.log("FETCHING SINGLE HIVE")
      let hiveData = await API.graphql<GraphQLQuery<GetHiveQuery>>({
        query: getHive,
        variables: { id: "1d1fe882-ed51-4d39-8136-06cf8f13e9a8" }
      })
      let hiveDataItem = hiveData.data?.getHive;
      console.log(JSON.stringify(hiveDataItem));
      setHiveDetails(hiveDataItem);
    } catch (error) {
      console.log("Error fetching hive: ", error);
    }
  };




  const handleActionBttnPress = () => {
    navigation.navigate("New Inspection")
  }
  if (!hiveDetails) {
    return (
    <Container><StyledText>Loading...</StyledText></Container>
    
    );
  }
  return (
    
    <Container>
      <StyledText style={{paddingLeft:20}}>Summary:</StyledText>
      <HiveCard item={hiveDetails}/>
      <StyledText style={{paddingLeft:20}}>Inspections:</StyledText>
      <ActionButton onPress={handleActionBttnPress}/>
    </Container>
  );
};

export default HiveDetailsScreen;








/* 
<CardContainer>
<CardTitle>{hiveDetails.name}</CardTitle>
<CardText>Type: {hiveDetails.type}</CardText>
<CardText>Strength: {hiveDetails.strength}</CardText>
<CardText>Last Inspection: {hiveDetails.lastInspection.date}</CardText>
<CardText>Inspection Notes: {hiveDetails.lastInspection.notes}</CardText>
<CardText>Queen Status: {hiveDetails.queenStatus}</CardText>
{/* Iterate over activities, harvests, treatments arrays to display each item 
*/