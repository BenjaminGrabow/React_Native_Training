import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
// import { Block } from './index.js';
import * as constants from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={styles.container}>
<Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});

export default App;