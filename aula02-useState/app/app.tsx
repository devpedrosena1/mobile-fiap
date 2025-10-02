import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Home() {
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [result, setResult] = useState('')

    enum CalcType {
        sum, sub, div, mult
    }

    function calc(type: CalcType) {
        const firstValueNumber = parseFloat(firstValue)
        const secondValueNumber = parseFloat(secondValue)
        if (!firstValueNumber || !secondValueNumber) {
            setResult('Houve um erro.')
            return
        }

        switch (type) {
            case CalcType.sum: return setResult(`O resultado da soma é ${firstValueNumber + secondValueNumber}`)
            case CalcType.sub: return setResult(`O resultado da subtracao é ${firstValueNumber - secondValueNumber}`)
            case CalcType.div: return setResult(`O resultado da divisao é ${firstValueNumber / secondValueNumber}`)
            case CalcType.mult: return setResult(`O resultado da muiltiplicacao é ${firstValueNumber * secondValueNumber}`)
        }
    }

    return (
        <View>
            <TextInput value={firstValue} placeholder='Insira o primeiro numero' onChangeText={ (text) => { setFirstValue(text) } }></TextInput>
            <TextInput value={secondValue} placeholder='Insira o segundo numero' onChangeText={ (text) => { setSecondValue(text) } }></TextInput>            
            <Button title="Somar" onPress = { () => calc(CalcType.sum) }></Button>
            <Button title="Subtrair" onPress = { () => calc(CalcType.sub) }></Button>
            <Button title="Dividir" onPress = { () => calc(CalcType.div) }></Button>
            <Button title="Multiplicar" onPress = { () => calc(CalcType.mult) }></Button>
            <Text>{result}</Text>
        </View>
    );
}