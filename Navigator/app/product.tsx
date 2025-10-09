import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function() {

    const router = useRouter()

    return(
        <View>
            <Text>Produto X</Text>
            <Button title='Details' onPress={() => router.push("./details")}></Button>
            <Button title='Voltar' onPress={() => router.back()}></Button>
            <Button title='Home' onPress={() => router.push("./")}></Button>
        </View>
    )
}