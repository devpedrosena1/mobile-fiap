import Card from '@/components/card'
import { View } from 'react-native'

export default function Home() {
    return (
        <View>
            <Card name="Botão 1" title="Clicar" onPress={() => {alert('Clicou botão 1.')}}/>
            <Card name="Botão 2" title="Clicar" onPress={() => {alert('Clicou botão 2.')}}/>
            <Card name="Botão 3" title="Clicar" onPress={() => {alert('Clicou botão 3.')}}/>
        </View>
    )
}