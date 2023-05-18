import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenLayout from '../components/ScreenLayout'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScreenLayout>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome to Weather App!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WeatherShow')}
        >
          <Text style={styles.buttonText}>What is the weather?</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    minHeight: 300,
    width: '100%',
  },
  title: {
    fontSize: 42,
    color: '#fff',
    marginBottom: 32,
  },
  button: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})

export default WelcomeScreen
