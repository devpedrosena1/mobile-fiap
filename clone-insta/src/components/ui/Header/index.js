import { View, Image } from 'react-native'
import style from './style'

const Header = () => {
  return (
    <View style={style.header}>
      <Image style={style.logo} source={require('../../../assets/logo.png')} />
    </View>
  )
}

export { Header }
