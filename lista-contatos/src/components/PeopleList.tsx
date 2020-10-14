import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = (props: any) => {
  const { peoples } = props;

  const items = peoples.map((people: any) => {
    return <PeopleListItem key={people.name.first} people={people} />;
  });

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff",
  },
});

export default PeopleList;
