import React, { useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ApiariesStackNavigator from './ApiariesStackNavigator';
import HivesStackNavigator from './HivesStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AlertsStackNavigator from './AlertsStackNavigator';

import { ThemeContext } from 'styled-components/native';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = ({toggleTheme}) => {

    const theme = useContext(ThemeContext);
    console.log(theme);

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor={theme.activeColor}
            inactiveColor={theme.inactiveColor}
            barStyle={
                theme.barStyle
            }
        >

            <Tab.Screen name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="ApiariesStack"
                component={ApiariesStackNavigator}
                options={{
                    tabBarLabel: 'Apiaries',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-city" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="HivesStack"
                component={HivesStackNavigator}
                options={{
                    tabBarLabel: 'Hives',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="beehive-outline" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen name="AlertsStack"
                component={AlertsStackNavigator}
                options={{
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen name="SettingsStack"
                children={ (props) => <SettingsStackNavigator {...props} toggleTheme={toggleTheme}/>}
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