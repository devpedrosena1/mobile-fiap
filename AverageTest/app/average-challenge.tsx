import DefaultButton from '@/components/default-button'
import { Scores } from '@/managers/score-challenge'
import { LocalStorage } from '@/managers/storage'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import {View, Text} from 'react-native'

export default function AverageChallenge() {
    const router = useRouter()

    const {average, isSaved} = useLocalSearchParams()
    const [isSavedAverage, setIsSavedAverage] = useState<boolean>()

    useEffect(() => setIsSavedAverage(isSaved === 'true'), [])

    return (
        <View>
            <Text>Sua média é: {average}</Text>
            <Text>Sua categoria é: {Scores.category(Number(average))}</Text>
            {
                isSavedAverage ? <DefaultButton title='Limpar' onPress={() => {LocalStorage.clean(); router.back()}}></DefaultButton>
                : <View>
                    <DefaultButton title='Salvar' onPress={() => {LocalStorage.save(String(average)); setIsSavedAverage(true)}}></DefaultButton>
                    <DefaultButton title='Voltar' onPress={() => {router.back()}}></DefaultButton>
                </View>
            }
        </View>
    )
}