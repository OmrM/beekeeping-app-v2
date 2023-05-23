import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;