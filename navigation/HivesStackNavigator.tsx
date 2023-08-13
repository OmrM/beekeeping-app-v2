import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HivesScreen from "../screens/HivesScreen";
import HiveDetailsScreen from "../screens/HiveDetailsScreen";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";
import NewHiveScreen from "../screens/NewHiveScreen";
import NewInspectionScreen from "../screens/NewInspectionScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

const HivesStackNavigator = ({ toggleTheme }: Props) => {
    const theme = useContext(ThemeContext) || lightTheme;
    return (
        <Stack.Navigator

            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.headerStyle.backgroundColor,
                },
                headerTintColor: theme.headerStyle.textColor,
            }}
        >
            <Stack.Screen name="Hives">
                {props => < HivesScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
            <Stack.Screen name="Hive Details">
                {props => < HiveDetailsScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
            <Stack.Screen name="New Hive"
                options ={ ({navigation}) => ({
                    presentation: 'modal',
                    headerLeft: () => (
                        <Button title="Cancel" onPress={() => navigation.goBack()} />
                    ),
                })}
            >
                {props => <NewHiveScreen{...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
            <Stack.Screen name="New Inspection"
                options ={ ({navigation}) => ({
                    presentation: 'modal',
                    headerLeft: () => (
                        <Button title="Cancel" onPress={() => navigation.goBack()} />
                    ),
                })}
            >
                {props => <NewInspectionScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default HivesStackNavigator;