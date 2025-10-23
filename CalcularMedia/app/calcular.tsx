import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function Calcular() {

    const router = useRouter()

    return (
        <View>
            <Text>Hello</Text>
            <Button title='Voltar' onPress={() => router.back()}></Button>
        </View>
    )
}