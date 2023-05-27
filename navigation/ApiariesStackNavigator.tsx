import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiariesScreen from "../screens/ApiariesScreen";

const Stack = createNativeStackNavigator();

interface Props {
    toggleTheme: () => void;
}

//const ApiariesStackNavigator: React.FC<Props> = ({toggleTheme}) => {
const ApiariesStackNavigator = ({ toggleTheme }: Props) => {
    return (
        <Stack.Navigator>
            {/* Add Screens here */}
            {/* <Stack.Screen name="Apiaries" component={ApiariesScreen}/> */}
            <Stack.Screen name="Apiaries">
                {props => <ApiariesScreen {...props} toggleTheme={toggleTheme} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default ApiariesStackNavigator;