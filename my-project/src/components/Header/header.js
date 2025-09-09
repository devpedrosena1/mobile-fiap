import {View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minha Lista</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {padding: 16, backgroundColor: 'purple', alignItems: 'center'},
    title: {color: 'white', fontSize: 24}
});

export default Header