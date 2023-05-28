import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ApiariesStackNavigator from './ApiariesStackNavigator';
import HivesStackNavigator from './HivesStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlertsStackNavigator from './AlertsStackNavigator';

import { ThemeContext } from 'styled-components/native';
import { lightTheme } from '../themes/themes'; 

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

interface Props {
    toggleTheme: () => void;
}

const BottomTabNavigator = ({ toggleTheme }: Props) => {

    //const theme = useContext(ThemeContext);
    const theme = useContext(ThemeContext) || lightTheme;

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor={theme.activeColor}
            inactiveColor={theme.inactiveColor}
            shifting={true}
            barStyle={
                theme.barStyle
            }
        >

            <Tab.Screen name="HomeStack"
                children={(props) => <HomeStackNavigator {...props} toggleTheme={toggleTheme} />}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="ApiariesStack"
                children={(props) => <ApiariesStackNavigator {...props} toggleTheme={toggleTheme} />}
                options={{
                    tabBarLabel: 'Apiaries',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-city" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="HivesStack"
                children={(props) => <HivesStackNavigator {...props} toggleTheme={toggleTheme} />}
                options={{
                    tabBarLabel: 'Hives',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="beehive-outline" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="AlertsStack"
                /* if you try passing this inline function using the 'component' prop it tells
                    you to use the children prop instead. */
                children={(props) => <AlertsStackNavigator {...props} toggleTheme={toggleTheme} />}
                options={{
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen name="SettingsStack"
                /* children prop: allows defining content for Tab.Screen component
                    instead of component, you can pass a function as the children prop
                    which receives the props object and returns content to be rendered */
                /* Inside this inline function:
                    (props) =>... takes in props as a a param. 
                        this props obj contains properties passed to the Tab.Screen component
                    <SettingsStackNavigator {...props} toggleTheme..: 
                        inside the func, it renders the SettingsStack.. component
                    {...props} spread operator: passes all properties received by Tab.Screen to SettingStackNavigator component
                        it also adds a new prop 'toggleTheme' with the val of the toggleTheme function
                */
                children={(props) => <SettingsStackNavigator {...props} toggleTheme={toggleTheme} />}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={24} />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default BottomTabNavigator;