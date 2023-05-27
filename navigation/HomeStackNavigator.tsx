import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import HivesScreen from "../screens/HivesScreen";
const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}
// const HomeStackNavigator: React.FC<Props> = ({ toggleTheme }) => {}
const HomeStackNavigator = ({ toggleTheme }: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home">
                {props => < HomeScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;