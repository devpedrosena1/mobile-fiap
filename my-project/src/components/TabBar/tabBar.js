import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TabBar = ({setPage}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setPage('Feed')}>
                <Text style={styles.buttonText}>Feed</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setPage('Chat')}>
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#eee',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4f46e5',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TabBar