import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Home() {

    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')

    const router = useRouter()

    /*
    enum converteType {
        conv
    }

    function converte(type: converteType)  {
        const notaUmNumber = parseFloat(nota1)
        const notaDoisNumber = parseFloat(nota2)
        const notaTresNumber = parseFloat(nota3)
    }
    */

    return (
        <View>
            <Text>Hello, World!</Text>
            <TextInput value={nota1} keyboardType='numeric' placeholder='Nota 1' onChangeText={(text) => {setNota1(text)}}></TextInput>
            <TextInput value={nota2} keyboardType='numeric' placeholder='Nota 2' onChangeText={(text) => {setNota2(text)}}></TextInput>
            <TextInput value={nota3} keyboardType='numeric' placeholder='Nota 3' onChangeText={(text) => {setNota3(text)}}></TextInput>
            <Button title='Calcular' onPress={() => router.push('./calcular')}></Button>
        </View>
    );
}