import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

const SettingsStackNavigator = ({toggleTheme}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Settings">
                { props => <SettingsScreen {...props} toggleTheme={toggleTheme}/> }
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default SettingsStackNavigator;