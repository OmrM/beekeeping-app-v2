import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertsScreen from "../screens/AlertsScreen";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";

const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

const AlertsStackNavigator = ({ toggleTheme }: Props) => {
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
            {/* <Stack.Screen name="Alerts" component={AlertsScreen} /> */}
            <Stack.Screen name="Alerts">
                {props => <AlertsScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AlertsStackNavigator;