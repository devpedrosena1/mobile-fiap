import React from "react";
import { TouchableOpacity, Text, StyleSheet, Linking } from "react-native";

export default function BotaoLink({ titulo, url }) {
  const abrirLink = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir link:", err)
    );
  };

  return (
    <TouchableOpacity style={styles.botao} onPress={abrirLink}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#1DB954",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: "60%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
