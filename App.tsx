import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';
import Control from './screens/Control';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AddDevice from './screens/AddDevice';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Control" component={Control} />
          <Stack.Screen name="기기등록" component={AddDevice} />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Register" component={Register}></Stack.Screen>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
