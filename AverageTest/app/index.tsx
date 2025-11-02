import DefaultButton from "@/components/default-button"
import { useRouter } from "expo-router"
import { View } from "react-native"

export default function Start() {
    const router = useRouter()

    return (
        <View>
            <DefaultButton title='Checkpoint' onPress={() => router.push('./checkpoint')}></DefaultButton>
            <DefaultButton title='Challenge' onPress={() => router.push('./challenge')}></DefaultButton>
        </View>
    )
}