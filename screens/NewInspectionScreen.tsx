import React, { useEffect, useState } from 'react';
import { InputContainer, ScreenText, StyledScrollView } from './styles/Screens.styles';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import { CreateInspectionInput, CreateInspectionMutation, UpdateHiveMutation, UpdateInspectionMutation } from '../src/API';
import { createInspection, updateHive, updateInspection } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import FormImage from '../components/FormImage';
import StyledInput from '../components/StyledInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';

type InspectionStateType = {
    date: string;
    hiveID: string;
    notes: string;
    image: string;
  }
  
  type ImageStateType = {
    imageURI: string;
  }
  
const NewInspectionScreen = ({ navigation, route }) => {
    const [currentHiveID, setCurrentHiveID] = useState("");
    const [currentHiveState, setCurrentHiveState] = useState({});
    const [inspections, setInspections] = useState([]);

    const initialFormState = { date: '', hiveID: '', notes: '', image: '', }
    const initialImageState = { imageURI: '' };
    const [date, setDate] = useState(new Date());
    const onDateChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        updateFormState('date', currentDate);
        console.log("selected date: ", currentDate);
    };
    const [formState, setFormState] = useState(initialFormState as InspectionStateType);
    const [imageState, setImageState] = useState(initialImageState as ImageStateType);
    function updateFormState(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }
    function updateImageState(key: any, value: any) {
        setImageState({ ...imageState, [key]: value });
    }
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        //check if an inspection object was passed (meaning we're editing, not creating new)
        let currHiveData = route.params.currHiveData;
        setCurrentHiveState(currHiveData);
        let inspections = route.params.inspections;
        console.log("current inspections: ", inspections);
        setInspections(inspections);
        if (route.params?.inspection) {
            navigation.setOptions({ title: 'Edit Inspection' });
            let inspection = route.params.inspection;
            setFormState(inspection);
            setImageState({ imageURI: inspection.image });
            setDate(new Date(inspection.date));
            setCurrentHiveID(inspection.hiveID);
            console.log("hive id when editing: ", JSON.stringify(route.params.inspection.hiveID))
            setIsEdit(true); //flag - lets us know if we're editing or creating a new one
        } else {
            // Creating new: will use the default states and the header defined in the stack
            setIsEdit(false);
            setCurrentHiveID(currHiveData.id)
            console.log("Hive id when creating new", JSON.stringify(currHiveData.id))
        }
    }, [route.params]);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                console.log('uri' + result);
                updateImageState('imageURI', result.assets[0].uri);
                const fileName = 'Hive_Photo_' + uuidv4();
                updateFormState('image', fileName);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const submitInspection = async () => {
        //try uploading image
        if (imageState.imageURI) {
            try {
                const photo = await fetch(imageState.imageURI);
                const photoBlob = await photo.blob();
                const key = formState.image;
                await Storage.put(key, photoBlob, {
                    contentType: 'image/jpeg'
                });
            } catch (error) {
                console.log(error);
            }
        }
        //organizing data to send, getting hiveID from previous screen
        let inspectionDetails: CreateInspectionInput = {
            id: formState.id,
            date: formState.date,
            notes: formState.notes,
            image: imageState.imageURI,
            hiveID: currentHiveID,
        }

        //make sure to get the current date into the inspection details to be submitted: 
        inspectionDetails.date = date.toISOString();

        //UPDATE existing INSPECTION op: Submit Data: 
        if (isEdit) {
            const editedInpection = await API.graphql<GraphQLQuery<UpdateInspectionMutation>>({
                query: updateInspection,
                variables: { input: inspectionDetails }
            });
        } else {
            //NEW INSPECTION op: Submit Data: 
            try {
                const newInspection = await API.graphql<GraphQLQuery<CreateInspectionMutation>>({
                    query: createInspection,
                    variables: { input: inspectionDetails }
                });
                console.log("inspection id to save in hive: ", JSON.stringify(newInspection.data?.createInspection?.id));
            } catch (error) {
                console.log(error);
            }
        }
        // UPDATE HIVE'S lastInspection field with the new inspection
        console.log("current hive's latest inspection date", currentHiveState.lastInspectionDate)

        const newInspectionDate = new Date(date);

        // create a sorted list of all inspections' dates (excluding the current inspection if editing)
        const sortedInspections = inspections
            .filter(inspection => !isEdit || inspection.id !== formState.id)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        // get the date of the latest inspection. 
        let latestInspectionDate = null;
        if (sortedInspections.length > 0) {
            latestInspectionDate = new Date(sortedInspections[0].date);
        }

        // check if the new or updated inspection date is the latest
        if (!latestInspectionDate || newInspectionDate > latestInspectionDate) {
            console.log("updating HIVE's last inspection with", formState.date);
            try {
                await API.graphql<GraphQLQuery<UpdateHiveMutation>>({
                    query: updateHive,
                    variables: { input: { id: currentHiveID, lastInspectionDate: date.toISOString() } },
                });
            } catch (error) {
                console.log(error);
            }
        }
        navigation.goBack();
    };

    return (
        <StyledScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    paddingVertical: 20,
                }}
            >
                <ScreenText>Date:</ScreenText>
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            </View>
            <StyledInput
                label="notes"
                value={formState.notes}
                onChangeText={val => updateFormState('notes', val)}
                multiline={true}
            />
            <InputContainer>
                <StyledButton icon="camera" onPress={pickImage}>
                    Pick an Image
                </StyledButton>
                {
                    imageState.imageURI &&
                    <FormImage imageURI={imageState.imageURI} onPress={() => { updateImageState('imageURI', null) }} />
                }
            </InputContainer>
            <InputContainer>
                <StyledButton onPress={submitInspection}>
                    Submit
                </StyledButton>
            </InputContainer>
        </StyledScrollView>
    );
}

export default NewInspectionScreen;