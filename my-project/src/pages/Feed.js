import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { tasksMock } from '../mocks/tasks';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasksMock}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  title: { 
    fontSize: 24, 
    marginBottom: 16, 
    fontWeight: 'bold' 
  },
  inputContainer: { 
    flexDirection: 'row', 
    marginBottom: 16 
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginRight: 8, 
    padding: 8, 
    borderRadius: 4 
  },
  button: { 
    paddingVertical: 8, 
    paddingHorizontal: 16, 
    backgroundColor: '#4f46e5', 
    borderRadius: 4 },
  buttonText: { 
    color: 'white', 
    fontWeight: 'bold' 
  },
  taskItem: { 
    padding: 12, 
    backgroundColor: '#eee', 
    marginBottom: 8, 
    borderRadius: 4 
  },
});

export default Feed;