import {View, Image, TouchableOpacity} from 'react-native'
import style from './style'

const ProfilePicture = () => {
    return (
        <TouchableOpacity>
            <View style={style.container}>
                <Image style={style.img} source={require('../../../assets/ppf.jpg')}/>
            </View>
        </TouchableOpacity>
    )
}

export {ProfilePicture}