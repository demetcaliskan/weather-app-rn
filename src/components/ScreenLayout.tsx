import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const ScreenLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1B1919', '#303344', '#379ADC']}
        style={styles.background}
      />
      <View style={styles.wrapper}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B1919',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 12,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
})

export default ScreenLayout
