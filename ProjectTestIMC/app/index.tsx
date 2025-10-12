import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home() {

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [result, setResult] = useState('')
    const router = useRouter()

    enum ImcType {
        calc
    }

    function calcImc(type: ImcType) {
        const pesoNumber = parseFloat(peso);
        const alturaNumber = parseFloat(altura);

        const imcCalculado = Math.round(pesoNumber / (alturaNumber * alturaNumber))

        if (!pesoNumber || !alturaNumber) {
            setResult('Houve um erro inesperado.')
            return
        }

        switch (type) {
            case ImcType.calc: return setResult(`O resultado do IMC é: ${imcCalculado}`)
        }

    }

    return(
        <View style = {styles.container}>
            <TextInput style = {styles.input} value={peso} placeholder='Insira o peso...' onChangeText={(text) => {setPeso(text)}}></TextInput>
            <TextInput style = {styles.input} value={altura} placeholder='Insira a altura...' onChangeText={(text) => {setAltura(text)}}></TextInput>
            <Button title='Calcular' onPress={() => calcImc(ImcType.calc)}></Button>
            <Text style={styles.text}>{result}</Text>
            <Button title='Page' onPress={() => router.push('./page')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d8cb3ff',
        gap: 30
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20
    },
    text: {
        fontSize: 20
    }
})