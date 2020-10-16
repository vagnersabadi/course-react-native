import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import PeopleList from "../components/PeopleList";

import axios from "axios";

export default class PeoplePage extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      peoples: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=5")
      .then((response) => {
        const { results } = response.data;
        this.setState({
          peoples: results,
        });
      });
  }

  render() {
    return (
      <View>
        {/* <Header title="Pessoas" /> */}
        <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
