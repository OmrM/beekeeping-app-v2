import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingScreen';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ApiariesStackNavigator from './ApiariesStackNavigator';
import HivesStackNavigator from './HivesStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlertsScreen from '../screens/AlertsScreen';
import AlertsStackNavigator from './AlertsStackNavigator';
//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor='#3E2723'
            inactiveColor='#795548'
            barStyle={{
                backgroundColor: '#FFC107',
                height: 90
            }}
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
                component={SettingsStackNavigator}
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