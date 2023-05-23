import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HivesScreen from "../screens/HivesScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

const HivesStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Hives" component={HivesScreen} />
        </Stack.Navigator>
    );
};

export default HivesStackNavigator;