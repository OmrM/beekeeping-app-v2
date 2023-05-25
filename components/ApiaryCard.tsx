import React from 'react';
import { Touchable, Text, View, StyleSheet} from 'react-native';


export default function ApiaryCard({item, onPress}) {
    return ( 
        <Touchable onPress={onPress} style={styles.listItemBttn} />
    );
};