import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '100%',
    height: 500,
  },
  header: {
    width: '100%',
    height: 35,
    backgroundColor: 'black',
  },
  imgContainer: {
    height: 300,
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
})

export default style
