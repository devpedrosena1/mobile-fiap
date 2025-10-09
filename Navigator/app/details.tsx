import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Details() {

    const router = useRouter()

    return (
        <View>
            <Text>Details</Text>
            <Button title='Product' onPress={() => router.push("./product")}></Button>
            <Button title='Voltar' onPress={() => router.back()}></Button>
            <Button title='Home' onPress={() => router.push("./")}></Button>
        </View>
    )
}