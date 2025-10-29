import { Score } from '@/managers/score';
import { LocalStorage } from '@/managers/storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export default function Home() {
    const router = useRouter()

    const [firstScore, setFirstScore] = useState<string>()
    const [secondScore, setSecondScore] = useState<string>()
    const [thirdScore, setThirdScore] = useState<string>()

    useEffect(() => {
        LocalStorage.verify().then((value) => {
            if (!value) return
            router.push({
                pathname: './average',
                params: {
                    average: value,
                    isSaved: 'true'
                }
            })
        })
    }, [])

    const scores = () => {
        const firstScoreNumber = Number(firstScore) // por padrao isso é uma string, devemos converter para number
        const secondScoreNumhber = Number(secondScore)
        const thirdScoreNumber = Number(thirdScore)

        if (!firstScoreNumber || !secondScoreNumhber || !thirdScoreNumber) return undefined // estamos verificando se os valores foram preenchidos
        return [firstScoreNumber, secondScoreNumhber, thirdScoreNumber] // retorna um array
    }

    return (
        <View>  
            <TextInput placeholder='Nota 1...' value={firstScore} onChangeText={(text) => setFirstScore(text)}></TextInput>
            <TextInput placeholder='Nota 2...' value={secondScore} onChangeText={(text) => setSecondScore(text)}></TextInput>
            <TextInput placeholder='Nota 3...' value={thirdScore} onChangeText={(text) => setThirdScore(text)}></TextInput>
            <Button title='Calcular' onPress={() => {
                const userScores = scores() // chamando a funcao scores
                if (!userScores) {
                    alert('Digite um valor válido.');
                    return
                }
                const average = Score.average(userScores)
                router.push({
                    pathname: './average',
                    params: {
                        average: average,
                        isSaved: 'false'
                    }
                })
            }}></Button>
        </View>
    )
}