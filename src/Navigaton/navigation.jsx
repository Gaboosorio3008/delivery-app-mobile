import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1} from './screens.jsx';

const Stack = createStackNavigator();

export default function AppScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}