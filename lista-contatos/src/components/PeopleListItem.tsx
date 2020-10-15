import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { capitaliseFirstLetter } from "../util";
// import capitaliseFirstLetter from './../util/capitalizeFirstLetter';

const PeopleListItem = (props: any) => {
  const { peoples } = props;
  const { title, first, last } = peoples.name;
  return (
    <View style={styles.line}>
      <Image style={styles.avatar} source={{uri: peoples.picture.thumbnail }}/>
      <Text style={styles.lineText}>{
      `${capitaliseFirstLetter(title)} ${first} ${last}`}
      </Text>
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
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    width: 40,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50
  }
});

export default PeopleListItem;
