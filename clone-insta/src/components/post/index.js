import { View, Image } from 'react-native'
import style from './style'
import { ProfilePicture } from '../ui'

const Post = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <ProfilePicture />
      </View>
      <View style={style.imgContainer}>
        <Image
          source={{
            uri: 'https://jpimg.com.br/uploads/2019/03/game-of-thrones.jpeg',
          }}
          style={style.img}
        />
      </View>
    </View>
  )
}

export { Post }
