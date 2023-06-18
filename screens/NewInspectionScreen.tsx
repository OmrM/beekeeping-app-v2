import React, { useEffect, useState } from 'react';
import { Container, InputContainer, ScreenText, StyledScrollView, StyledText } from './styles/Screens.styles';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import { Apiary, CreateApiaryInput, CreateApiaryMutation, CreateHiveInput, CreateHiveMutation, CreateInspectionInput, CreateInspectionMutation, ListApiariesQuery } from '../src/API';
import { createHive, createInspection } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import FormImage from '../components/FormImage';
import StyledInput from '../components/StyledInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScreenHeading } from './styles/Screens.styles';
import { View } from 'react-native';

const NewInspectionScreen = ({navigation, route}) => {
    const initialFormState = { date: '', hiveID: '', notes: '', image: '', }
    const initialImageState = { imageURI: '' };
    const [date, setDate] = useState(new Date());

    const onDateChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        updateFormState('date', currentDate);
        console.log("date: ", currentDate);
    };
    const [formState, setFormState] = useState(initialFormState);
    const [imageState, setImageState] = useState(initialImageState);
    function updateFormState(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }
    function updateImageState(key: any, value: any) {
        setImageState({ ...imageState, [key]: value });
    }

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
        let currentHiveID = route.params
        let inspectionDetails: CreateInspectionInput = {
            date: formState.date,
            notes: formState.notes,
            image: imageState.imageURI,
            hiveID: currentHiveID,
        }
        //adding imageURI to formstate if it exists. idk why i'm not just updating it 
        //when i add an image. will figure out later
        if (formState.image) {
            inspectionDetails = { ...inspectionDetails, image: formState.image }
        }
        //make sure to get the current date into the inspection details to be submitted: 
        inspectionDetails.date = date.toISOString();
        console.log(JSON.stringify(inspectionDetails));
        //submit to db: 
        await API.graphql<GraphQLQuery<CreateInspectionMutation>>({
            query: createInspection,
            variables: { input: inspectionDetails }
        });
        navigation.goBack();
    };

    return (
        <StyledScrollView>
            {/*             <StyledInput
                label="Date"
                value={formState.date}
                onChangeText={val => updateFormState('date', val)}
                multiline={false}
            /> */}
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