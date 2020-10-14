import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { capitaliseFirstLetter } from "../util";
// import capitaliseFirstLetter from './../util/capitalizeFirstLetter';

const PeopleListItem = (props: any) => {
  const { peoples } = props;
  const { title, first, last } = peoples.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{`${capitaliseFirstLetter(
        title
      )} ${first} ${last}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: "center",
    flexDirection: "row",
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  },
});

export default PeopleListItem;
