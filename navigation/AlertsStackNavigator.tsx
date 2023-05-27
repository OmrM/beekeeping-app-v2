import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertsScreen from "../screens/AlertsScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

const AlertsStackNavigator = ({ toggleTheme }: Props) => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Alerts" component={AlertsScreen} /> */}
            <Stack.Screen name="Alerts">
                {props => <AlertsScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AlertsStackNavigator;