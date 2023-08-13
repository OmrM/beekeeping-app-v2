import React, { useEffect, useState } from 'react';
import { Container, InputContainer, StyledScrollView, StyledText } from './styles/Screens.styles';
import StyledButton from '../components/StyledButton';
import * as ImagePicker from 'expo-image-picker';
import { Apiary, CreateApiaryInput, CreateApiaryMutation, CreateHiveInput, CreateHiveMutation, ListApiariesQuery } from '../src/API';
import { createHive } from '../src/graphql/mutations';
import { API, GraphQLQuery } from '@aws-amplify/api';
import { Storage } from '@aws-amplify/storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import FormImage from '../components/FormImage';
import StyledInput from '../components/StyledInput';
import { listApiaries } from '../src/graphql/queries';
import DropDownPicker from 'react-native-dropdown-picker';


interface HivesScreenProps {
    navigation: {
        goBack(): unknown;
        navigate: Screen;
    }
}

const NewHiveScreen = ({ navigation }: HivesScreenProps) => {
    const initialFormState = { name: '', location: '', notes: '', image: '', apiary: '' }
    const initialImageState = { imageURI: '' }

    const [formState, setFormState] = useState(initialFormState);
    const [imageState, setImageState] = useState(initialImageState);
    const [selectedApiary, setSelectedApiary] = useState(null); //state for apiary this hive belongs to

    //apiaries data state to be used to populate dropdown: 
    const [apiaries, setApiaries] = useState<Apiary[]>([]);

    //state for dropdownpicker: 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    function updateFormState(key: any, value: any) {
        setFormState({ ...formState, [key]: value });
    }
    function updateImageState(key: any, value: any) {
        setImageState({ ...imageState, [key]: value });
    }

    useEffect(() => {


        getApiaries();
    }, []);

    const getApiaries = async () => {
        // Fetch apiaries from your backend here and update the state
        // For example:
        /*
        const fetchedApiaries = await API.graphql({ query: getApiaries });
        setApiaries(fetchedApiaries);
        if(fetchedApiaries.length > 0) setSelectedApiary(fetchedApiaries[0].id);
        */
        try {
            const apiaryData = await API.graphql<GraphQLQuery<ListApiariesQuery>>({ query: listApiaries });
            const apiaryDataItems = apiaryData.data?.listApiaries?.items ?? [];
            console.log(JSON.stringify(apiaryDataItems));
            setApiaries(apiaryDataItems as unknown as Apiary[]);
        } catch (error) {
            console.log("error fetching apiaries", error);
        }

    };
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
                const fileName = 'Hive_Photo_' + uuidv4();
                updateFormState('image', fileName);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const submitHive = async () => {
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
        let hiveDetails: CreateHiveInput = {
            name: formState.name,
            notes: formState.notes,
            apiaryID: selectedApiary,
        }
        if (formState.image) {
            hiveDetails = { ...hiveDetails, image: formState.image };
        }

        console.log(JSON.stringify(hiveDetails));
        await API.graphql<GraphQLQuery<CreateHiveMutation>>({
            query: createHive,
            variables: { input: hiveDetails }
        })
        navigation.goBack();
    };
    /* 
        function setItems(value: SetStateCallback<any[]>): void {
            throw new Error('Function not implemented.');
        } */
    const handleApiaryChange = (val: string) => {
        setSelectedApiary(val);
        setValue(val);
        updateFormState('apiary', value);
        console.log("apiary id: " + JSON.stringify(selectedApiary))
        
    };
    return (
        <StyledScrollView>
            <StyledInput
                label="Name"
                value={formState.name}
                onChangeText={val => updateFormState('name', val)}
                multiline={false}
            />
{/*             <StyledInput
                label="Location"
                value={formState.location}
                onChangeText={val => updateFormState('location', val)}
                multiline={false}
            /> */}
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
            <StyledText>Assign Hive to an Apiary</StyledText>
            <InputContainer>
            <DropDownPicker
                    open={open}
                    value={value}
                    items={apiaries.map((apiary) => ({ label: apiary.name, value: apiary.id }))}

                    setOpen={setOpen}
                    setValue={handleApiaryChange}
                    autoScroll={true}
                    dropDownDirection="TOP"
                />
            </InputContainer>
               
            </InputContainer>
            <InputContainer >
                <StyledButton onPress={submitHive} >
                    Submit
                </StyledButton>
            </InputContainer>

       </StyledScrollView>
    );
};

export default NewHiveScreen;