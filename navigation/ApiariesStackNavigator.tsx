import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiariesScreen from "../screens/ApiariesScreen";
import { ThemeContext } from "styled-components";
import { lightTheme } from "../themes/themes";
import { useContext } from "react";
import AddNewApiary from "../screens/NewApiaryScreen";
import NewApiaryScreen from "../screens/NewApiaryScreen";

const Stack = createNativeStackNavigator();



//const ApiariesStackNavigator: React.FC<Props> = ({toggleTheme}) => {
const ApiariesStackNavigator = ({ toggleTheme }: Props) => {
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
            {/* Add Screens here */}
            {/* <Stack.Screen name="Apiaries" component={ApiariesScreen}/> */}
            <Stack.Screen name="Apiaries">
                {props => <ApiariesScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
            <Stack.Screen name="New Apiary"
                options={{
                    presentation: 'modal',
                    headerBackTitle: 'cancel',
                }}
            >
                {props => <NewApiaryScreen{...props} toggleTheme={toggleTheme}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default ApiariesStackNavigator;