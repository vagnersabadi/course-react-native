import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props: any) => (
  <View style={styles.container}>
    <Text style={styles.title}> { props.title } </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#6ca2f7",
  },

  title: {
    fontSize: 50,
    color: "#fff",
  },
});

export default Header;
