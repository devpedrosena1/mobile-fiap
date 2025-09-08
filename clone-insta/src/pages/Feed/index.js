import { View } from 'react-native'
import style from './style'
import { Post } from '../../components'

const Feed = () => {
  return (
    <View style={style.page}>
      <Post />
    </View>
  )
}

export default Feed
