import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, InputContainer, StyledText } from './styles/Screens.styles';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native';
import { CreateApiaryInput, CreateApiaryMutation, S3ObjectInput } from '../src/API';
import { createApiary } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const NewApiaryScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');
    const [image, setImage] = useState<string | null | S3ObjectInput>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const submitApiary = async () => {
        // Submit the new apiary details
        const apiaryDetails: CreateApiaryInput = {
            name: name,
            location: location,
            notes: notes,
            image: image,
            userID: 'testUser'
        }
        

        if (image) {
            const response = await fetch(image);
            const blob = await response.blob();
            const key = uuidv4();
            await Storage.put(key, blob, {
                contentType: 'image/jpeg' // contentType is optional
            });
            apiaryDetails.image.key=key

        }
        const newApiary = await API.graphql<GraphQLQuery<CreateApiaryMutation>>({
            query: createApiary,
            variables: { input: apiaryDetails }
        })
        navigation.goBack();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}
            accessible={false}>
            <Container>

                <InputContainer>
                    <TextInput
                        label="Name"
                        value={name}
                        onChangeText={setName}
                    />
                </InputContainer>

                <InputContainer>
                    <TextInput
                        label="Location"
                        value={location}
                        onChangeText={setLocation}
                    />
                </InputContainer>

                <InputContainer>
                    <TextInput
                        label="Notes"
                        value={notes}
                        onChangeText={setNotes}
                    />
                </InputContainer>

                <InputContainer>
                    <StyledButton icon="camera" onPress={pickImage}>
                        Pick an Image
                    </StyledButton>
                    {

                        image &&
                        <TouchableOpacity onPress={() => { setImage(null) }} style={{ overflow: 'hidden' }}>
                            <Image
                                source={{ uri: image }}
                                style={{ width: 200, height: 200, alignSelf: 'center', margin: 20, borderRadius: 5, }} />
                        </TouchableOpacity>
                    }
                </InputContainer>

                <InputContainer>
                    <StyledButton mode="contained" onPress={submitApiary}>
                        Submit
                    </StyledButton>
                </InputContainer>

            </Container>
        </TouchableWithoutFeedback>
    );
};

export default NewApiaryScreen;
