import React, { useEffect, useState } from 'react';
import { StyledText, Container, ScreenHeading } from './styles/Screens.styles';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetHiveQuery, InspectionsByHiveIDAndDateQuery } from '../src/API';
import { getHive, inspectionsByHiveIDAndDate } from '../src/graphql/queries';
import HiveCard from '../components/HiveCard';
import ActionButton from '../components/ActionButton';
import InspectionCard from '../components/InspectionCard';
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { View } from 'react-native';
interface Hive {
  inspections: any;
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
  const isFocused = useIsFocused();
  const [hiveDetails, setHiveDetails] = useState<Hive | null>(null);
  const [inspections, setInspections] = useState([]);


  useEffect(() => {
    if (isFocused) {
      fetchInspections();
      fetchHive();
    }
  }, [isFocused]);

  const fetchHive = async () => {
    try {
      console.log("FETCHING SINGLE HIVE")
      let selectedHiveId = route.params.id;
      let hiveData = await API.graphql<GraphQLQuery<GetHiveQuery>>({
        query: getHive,
        variables: { id: selectedHiveId }
      })
      let hiveDataItem = hiveData.data?.getHive;
      //console.log(JSON.stringify(hiveDataItem));
      //let inspectionsData = hiveDataItem?.inspections;
      //setInspections(inspectionsData?.items);
      setHiveDetails(hiveDataItem);
      //console.log("Inspections for this hive: ", inspectionsData);
    } catch (error) {
      console.log("Error fetching hive: ", error);
    }
  };

  const fetchInspections = async () => {
    let selectedhive = route.params.id;
    //console.log("hive", selectedhive);
    let inspectionsData = await API.graphql<GraphQLQuery<InspectionsByHiveIDAndDateQuery>>({
      query: inspectionsByHiveIDAndDate,
      variables: { hiveID: selectedhive, sortDirection: "DESC" }

    });
    let inspectionsDataItems = inspectionsData.data?.inspectionsByHiveIDAndDate?.items ?? [];
    setInspections(inspectionsDataItems);
    console.log("inspections for hive: ", JSON.stringify(inspectionsData));
  }
  const handleActionBttnPress = () => {
    //pass hiveID to new inspection screen. 
    let currentHiveID = route.params.id;
    console.log(currentHiveID);
    navigation.navigate("New Inspection", currentHiveID);
  }
  const handleDotsPress = () => {
    console.log("dots pressed")
  };


  const ListHeader = () => (
    <View>
      <ScreenHeading>Summary</ScreenHeading>
      <HiveCard item={hiveDetails} />
      <ScreenHeading>Inspections</ScreenHeading>
    </View>
  );
  if (!hiveDetails) {
    return (
      <Container><StyledText>Loading...</StyledText></Container>
    );
  }
  //custom render function for card flatlist: 
  const renderInspectionCard = ({ item }) => {
    const handleInspctCardPress = () => {
      //navigate to screen with more details for this inspection record
      console.log("Pressed inspection");
    }
    return <InspectionCard item={item} onPress={handleInspctCardPress} refreshInspections={fetchInspections}/>
  }
  return (
    <Container>
      <FlatList
        data={inspections}
        renderItem={renderInspectionCard}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
      />
      <ActionButton onPress={handleActionBttnPress} />
    </Container>
  );
};

export default HiveDetailsScreen;