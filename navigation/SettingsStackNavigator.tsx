import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";

const Stack = createNativeStackNavigator();

//Props: interface that defines the shape of props this component receives
interface Props {
    toggleTheme: () => void; //toggleTheme: function that returns void
}
//React.FC<Props>: type annotation - SettingsStackNavigator is a functional component
// which should receive props of type Props
// old way: const SettingStackNavigator: React.FC<Props> = ({toggleTheme}) => {}
const SettingsStackNavigator = ({ toggleTheme }: Props) => {
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
            <Stack.Screen name="Settings">
                {props => < SettingsScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default SettingsStackNavigator;