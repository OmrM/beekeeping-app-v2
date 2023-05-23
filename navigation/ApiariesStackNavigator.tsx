import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiariesScreen from "../screens/ApiariesScreen";

const Stack = createNativeStackNavigator();

const ApiariesStackNavigator = () => {
    return(
        <Stack.Navigator>
            {/* Add Screens here */}
            <Stack.Screen name="Apiaries" component={ApiariesScreen}/>
        </Stack.Navigator>
    );
};

export default ApiariesStackNavigator;