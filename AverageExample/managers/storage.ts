import AsyncStorage from '@react-native-async-storage/async-storage'

const key = 'average'

const verify = () => AsyncStorage.getItem(key)
const save = (value: string) => AsyncStorage.setItem(key, value)
const clear = () => AsyncStorage.clear()

export const LocalStorage = {
    verify: verify,
    save: save,
    clear: clear
}