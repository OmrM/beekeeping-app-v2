import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HivesScreen from "../screens/HivesScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

const HivesStackNavigator = ({ toggleTheme }: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Hives">
                {props => < HivesScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default HivesStackNavigator;