import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";

const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

// const HomeStackNavigator: React.FC<Props> = ({ toggleTheme }) => {}
const HomeStackNavigator = ({ toggleTheme }: Props) => {
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
            <Stack.Screen name="Home">
                {props => < HomeScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
};

export default HomeStackNavigator;