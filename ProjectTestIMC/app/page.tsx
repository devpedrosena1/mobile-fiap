import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function Page() {

    const router = useRouter()

    return (
        <View>
            <Text>Informações IMC</Text>
            <Button title='Voltar' onPress={() => router.back()}></Button>
        </View>
    )
}