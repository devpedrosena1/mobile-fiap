import DefaultButton from "@/components/default-button";
import { Scores } from "@/managers/score-challenge";
import { LocalStorage } from "@/managers/storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";

export default function Challenge() {
    const router = useRouter()

    const [firstScore, setFirstScore] = useState<string>()
    const [secondScore, setSecondScore] = useState<string>()
    const [thirdScore, setThirdScore] = useState<string>()
    const [fourthScore, setFourthScore] = useState<string>()

    /*
    useEffect (efeitos colaterais) é usado em três situaçoes

    1. Quando QUALQUER estado for alterado *sem []*
    2. Quando UM estado determinado for alterado *com [] com variáveis*
    3. Quando a tela carregar *com [] vazios*
    */

    useEffect(() => {
        LocalStorage.verify().then((value) => {
            if (!value) return
            router.push({
                pathname: './average-challenge',
                params: {
                    average: value,
                    isSaved: 'true'
                }
            })
        })
    }, []) // quando a tela carrega, [] vazios

    const scores = () => {
        const firstScoreNumber = Number(firstScore)
        const secondScoreNumber = Number(secondScore)
        const thirdScoreNumber = Number(thirdScore)
        const fourthScoreNumber = Number(fourthScore)

        if (!firstScoreNumber || !secondScoreNumber || !thirdScoreNumber || !fourthScoreNumber) return undefined
        return [firstScoreNumber, secondScoreNumber, thirdScoreNumber, fourthScoreNumber] // retornamos um array das notas para calcular
    }

    return (
        <View>
            <TextInput placeholder="Digite Sprint 1" value={firstScore} onChangeText={(text) => {setFirstScore(text)}}></TextInput>
            <TextInput placeholder="Digite Sprint 2" value={secondScore} onChangeText={(text) => {setSecondScore(text)}}></TextInput>
            <TextInput placeholder="Digite Sprint 3" value={thirdScore} onChangeText={(text) => {setThirdScore(text)}}></TextInput>
            <TextInput placeholder="Digite Sprint 4" value={fourthScore} onChangeText={(text) => {setFourthScore(text)}}></TextInput>
            <DefaultButton title='Calcular' onPress={() => {
                const groupScores = scores()
                if (!groupScores) {alert('Digite um valor válido.'); return} // se nao existir valor de uma msg, se existir retorne a funcao
                const average = Scores.average(groupScores)
                router.push({
                    pathname: './average-challenge',
                    params: {
                        average: average,
                        isSaved: 'false'
                    }
                })
            }}></DefaultButton>
        </View>
    )
}