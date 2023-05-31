import React, { useEffect, useState } from 'react';
import { StyledText, Container, CardContainer, CardText, CardTitle } from './styles/Screens.styles';

interface Hive {
  id: string;
  name: string;
  type: 'Langstroth' | 'Top-bar' | 'Warre';
  strength: string;
  lastInspection: {
    date: string;
    notes: string;
  };
  queenStatus: string;
  activities: Array<{ 
    activity: string; 
    date: string; 
  }>;
  harvests: Array<{ 
    date: string; 
    quantity: number; 
    quality: string; 
  }>;
  treatments: Array<{ 
    date: string; 
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
/*     const fetchedHiveDetails: Hive = {
      // ... Fetch from API based on `id`
    }; */
    
    const fetchedHiveDetails: Hive = {
        id: "1",
        name: "Hive 1",
        type: "Langstroth",
        strength: "Strong",
        lastInspection: {
          date: "2023-05-18",
          notes: "Good honey production, no visible pests or diseases.",
        },
        queenStatus: "Present",
        activities: [
          {
            activity: "Feeding",
            date: "2023-05-17",
          },
          {
            activity: "Splitting",
            date: "2023-05-10",
          },
        ],
        harvests: [
          {
            date: "2023-05-15",
            quantity: 10, // lbs
            quality: "Excellent",
          },
          {
            date: "2023-04-15",
            quantity: 8, // lbs
            quality: "Good",
          },
        ],
        treatments: [
          {
            date: "2023-05-01",
            medication: "Mite treatment",
            dosage: "Standard",
          },
        ],
      };
      
    setHiveDetails(fetchedHiveDetails);
  }, [route.params.id]);

  if (!hiveDetails) {
    return <StyledText>Loading...</StyledText>;
  }

  return (
    <Container>
      <CardContainer>
        <CardTitle>{hiveDetails.name}</CardTitle>
        <CardText>Type: {hiveDetails.type}</CardText>
        <CardText>Strength: {hiveDetails.strength}</CardText>
        <CardText>Last Inspection: {hiveDetails.lastInspection.date}</CardText>
        <CardText>Inspection Notes: {hiveDetails.lastInspection.notes}</CardText>
        <CardText>Queen Status: {hiveDetails.queenStatus}</CardText>
        {/* Iterate over activities, harvests, treatments arrays to display each item */}
      </CardContainer>
    </Container>
  );
};

export default HiveDetailsScreen;
