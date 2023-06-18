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


const NewInspectionScreen = () => {
    const initialFormState = { name: '', location: '', notes: '', image: '', apiary: '' }
    const initialImageState = { imageURI: '' }


    return(
        <StyledScrollView>

        </StyledScrollView>
    );
}

export default NewInspectionScreen;