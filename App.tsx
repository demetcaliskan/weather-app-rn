import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './src/screens/WelcomeScreen'
import WeatherShowScreen from './src/screens/WeatherShowScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Welcome'
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name='WeatherShow'
          component={WeatherShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
