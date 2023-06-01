import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HivesScreen from "../screens/HivesScreen";
import HiveDetailsScreen from "../screens/HiveDetailsScreen";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";

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
        </Stack.Navigator>
    );
};

export default HivesStackNavigator;