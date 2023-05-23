import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* import top level navigator here */}
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/* <View style={styles.container}>
<Text>Open up App.tsx to start working on your app!</Text>
<StatusBar style="auto" />
</View> */}