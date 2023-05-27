import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
const Stack = createNativeStackNavigator();
//Props: interface that defines the shape of props this component receives
interface Props {
    toggleTheme: () => void; //toggleTheme: function that returns void
}
//React.FC<Props>: type annotation - SettingsStackNavigator is a functional component
// which should receive props of type Props
// old way: const SettingStackNavigator: React.FC<Props> = ({toggleTheme}) => {}
const SettingsStackNavigator = ({toggleTheme}: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings">
                {props => < SettingsScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default SettingsStackNavigator;