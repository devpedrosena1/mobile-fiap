import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!n1 || !n2) {
      setResultado("Houve um erro.");
      return;
    }

    let res = 0;
    switch (operacao) {
      case "soma":
        res = n1 + n2;
        break;
      case "subtracao":
        res = n1 - n2;
        break;
      case "multiplicacao":
        res = n1 * n2;
        break;
      case "divisao":
        res = n2 !== 0 ? n1 / n2 : "Não é possível dividir por 0"
        break;
      default:
        res = "Operação inválida."
    }
    setResultado(res);
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Insira o primeiro número..."
        keyboardType="numeric"
        value={num1}
        onChange={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira o segundo número..."
        keyboardType="numeric"
        value={num2}
        onChange={setNum2}
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => calcular("soma")}>
          <Text style={styles.textButton}>Soma</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => calcular("subtracao")}>
          <Text style={styles.textButton}>Subtração</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => calcular("multiplicacao")}>
          <Text style={styles.textButton}>Multiplicação</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => calcular("divisao")}>
          <Text style={styles.textButton}>Divisão</Text>
        </TouchableOpacity>
      </View>

      {resultado != null && (
        <Text>O resultado é: {resultado}</Text>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
    marginHorizontal: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
})