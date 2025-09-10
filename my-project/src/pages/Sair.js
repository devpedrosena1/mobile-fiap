import { TouchableOpacity, StyleSheet } from "react-native";

import { Text, View } from "react-native"

const Sair = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    button: { 
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        width: 90,
        backgroundColor: '#e02c0dff', 
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: { 
        color: 'white', 
        fontWeight: 'bold',
        textAlign: 'center'
    }   
});

export default Sair