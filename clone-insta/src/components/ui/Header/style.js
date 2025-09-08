import { StyleSheet, Platform } from 'react-native'

const style = StyleSheet.create({
  header: {
    height: 120,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
  },
  logo: {
    width: 190,
    height: 60,
    resizeMode: 'contain',
  },
})

export default style
