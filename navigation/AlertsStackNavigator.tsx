import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AlertsScreen from "../screens/AlertsScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

const AlertsStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Alerts" component={AlertsScreen} />
        </Stack.Navigator>
    );
};

export default AlertsStackNavigator;