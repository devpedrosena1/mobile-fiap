import { View, Text, TouchableOpacity } from 'react-native'
import style from './style'

const TabBar = ({setPage}) => {
  console.log(setPage)
  return (
    <View style={style.tabbar}>
      <View style={[style.tabIcon]}>
        <TouchableOpacity onPress={() => setPage('feed')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity onPress={() => setPage('chat')}>
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity onPress={() => setPage('video')}>
          <Text>Video</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity onPress={() => setPage('loja')}>
          <Text>Loja</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.tabIcon]}>
        <TouchableOpacity onPress={() => setPage('perfil')}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { TabBar }
