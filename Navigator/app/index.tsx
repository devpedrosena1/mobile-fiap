import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {

    const router = useRouter()

    return (
        <View>
            <Text>Hello, World!</Text>
            <Button title='Details' onPress={() => router.push("./details")}></Button>
            <Button title='Product' onPress={() => router.push("./product")}></Button>
        </View>
    )
}

