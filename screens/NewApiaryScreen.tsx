import React, { useState } from 'react';
import { InputContainer, StyledScrollView } from './styles/Screens.styles';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import { CreateApiaryInput, CreateApiaryMutation } from '../src/API';
import { createApiary } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import FormImage from '../components/FormImage';
import StyledInput from '../components/StyledInput';

const NewApiaryScreen = ({ navigation }) => {

    const initialFormState = { name: '', location: '', notes: '', image: '' }
    const initialImageState = { imageURI: '' }

    const [formState, setFormState] = useState(initialFormState);
    const [imageState, setImageState] = useState(initialImageState);

    //state updater functions - good to have when updating multiple fields of the state object
    function updateFormState(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }
    function updateImageState(key: any, value: any) {
        setImageState({ ...imageState, [key]: value });
    }

    /* pickImage function updates: 
        imageState: holds the URI of the image, which points to the image file
        formState.image: holds the image file name, will be saved to s3 with this name
    */
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
                const fileName = 'Apiary_Photo_' + uuidv4();
                updateFormState('image', fileName);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const submitApiary = async () => {
        // Upload image
        if (imageState.imageURI) {
            try {
                const photo = await fetch(imageState.imageURI);
                const photoBlob = await photo.blob();//photo blob to be uploaded
                const key = formState.image; //image file name
                await Storage.put(key, photoBlob, {
                    contentType: 'image/jpeg'
                })
            } catch (error) {
                console.log(error);
            }
        }

        // TODO: figure out how to get the current username here:
        // TODO: figure out how to properly set the type for s3 object
        let apiaryDetails: CreateApiaryInput = {
            name: formState.name,
            location: formState.location,
            notes: formState.notes,
            userID: 'testUser'
        }
        if (formState.image) {
            apiaryDetails = { ...apiaryDetails, image: formState.image };
        }
        await API.graphql<GraphQLQuery<CreateApiaryMutation>>({
            query: createApiary,
            variables: { input: apiaryDetails }
        })
        navigation.goBack();
    };

    return (
        <StyledScrollView>
            <StyledInput 
                label="name"
                value={formState.name}
                onChangeText={val => updateFormState('name', val)}
                multiline={false}
            />
            <StyledInput
                label="Location"
                value={formState.location}
                onChangeText={val => updateFormState('location', val)}
                multiline={false}
            />
            <StyledInput
                label="Notes"
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
                <StyledButton onPress={submitApiary}>
                    Submit
                </StyledButton>
            </InputContainer>

        </StyledScrollView>
    );
};

export default NewApiaryScreen;
