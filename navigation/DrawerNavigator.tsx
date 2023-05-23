import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//import screens or other navigators
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/SettingScreen';
import SettingsStackNavigator from './SettingsStackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
        
            <Drawer.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false}}/>
            {/* <Drawer.Screen name="Settings" component={SettingsStackNavigator}/> */}
            {/* somehow link the SettingsScreen from the HomeStackNavigator here */}
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;


{/* <Drawer.Screen name="Home" component={HomeScreen}/>  */}