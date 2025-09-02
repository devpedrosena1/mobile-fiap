import React from "react";
import { View, StyleSheet } from "react-native";
import Perfil from "../components/Perfil";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Perfil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
});
