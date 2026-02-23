import { auth } from '@/services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password)
            alert(`Usuário cadastrado: ${email}`)
            const token = await credential.user.getIdToken()
            console.log(token)
        } catch (error: any){
            alert('Usuário não cadastrado')
            console.log(error)
        }
    }

    return (
        <View>
            <TextInput placeholder='Digite seu e-mail: ' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput placeholder='Digite sua senha: ' onChangeText={(text) => setPassword(text)}></TextInput>
            <Button title="Cadastrar" onPress={signUp}></Button>
        </View>
    )
}