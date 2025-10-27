import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export default function Home() {
    const router = useRouter()

    const [firstScore, setFirstScore] = useState<string>()
    const [secondScore, setSecondScore] = useState<string>()
    const [thirdScore, setThirdScore] = useState<string>()

    return (
        <View>  
            <TextInput placeholder='Checkpoint 1'></TextInput>
            <TextInput placeholder='Checkpoint 2'></TextInput>
            <TextInput placeholder='Checkpoint 3'></TextInput>
            <Button title='Calcular' onPress={() => router.push('./average.tsx')}></Button>
        </View>
    )
}