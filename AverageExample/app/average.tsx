import { Score } from '@/managers/score';
import { LocalStorage } from '@/managers/storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Average() {

    const router = useRouter()

    const [isSavedAverage, setIsSavedAverage] = useState<boolean>()
    const {average, isSaved} = useLocalSearchParams()

    useEffect(() => setIsSavedAverage(isSaved === 'true'), [])

    return(
        <View>
            <Text>Sua média é: {average}</Text>
            <Text>Sua categoria é: {Score.category(Number(average))}</Text>
            {
                isSavedAverage ? <Button title='limpar' onPress={() => { LocalStorage.clear(); router.back()}}></Button>
                : <View>
                    <Button title='Salvar' onPress={() => {LocalStorage.save(String(average)); setIsSavedAverage(true)}}></Button>
                    <Button title='Voltar' onPress={() => {router.back()}}></Button>
                </View>
            }
        </View>
    );
}