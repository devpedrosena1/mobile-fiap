import { Button, ButtonProps, Text, View } from 'react-native';
import { styles } from './style';

type CardProps = ButtonProps & {
    name?: string;
    // onPressAction: () => void; // isso basicamente é uma nova propriedade
    //                            // que recebe uma funcao chamada 'onPressAction'
    //                            // executa uma funcao e retorna void 'vazio'
}

export default function Card({name, ...rest }:CardProps) {
    // function handleClick() {
    //     alert("Clicou")
    // }

    return (
        <View>
            <Text style={styles.text}>{name}</Text>
            <Button {...rest}/>
        </View>
    )
}
