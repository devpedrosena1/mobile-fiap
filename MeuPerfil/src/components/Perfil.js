import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import BotaoLink from "./BotaoLink";

export default function Perfil() {
  const github = "https://github.com/devpedrosena1";
  const linkedin = "https://www.linkedin.com/in/pedro-henrique-sena";
  const instagram = "https://www.instagram.com/sena.fxl";
  const foto = require("../../assets/img.jpg"); 

  return (
    <View style={styles.container}>
      <Image source={foto} style={styles.foto} />
      <Text style={styles.nome}>Pedro Henrique Sena</Text>
      <Text style={styles.descricao}>👨‍💻 Desenvolvedor | 🚀 Entusiasta de Tecnologia</Text>

      <BotaoLink titulo="GitHub" url={github} />
      <BotaoLink titulo="LinkedIn" url={linkedin} />
      <BotaoLink titulo="Instagram" url={instagram} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#fff",
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
  },
});
