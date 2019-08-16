import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
// import { Block } from './index.js';

// import all used images
const images = [
  require('./assets/icons/plants.png'),
  require('./assets/icons/seed.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/avatar.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/avatar.png'),
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
  }

  handleResourcesAsync = async () => {
    //we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
 return (
   <AppLoading
   startAsync={this.handleResourcesAsync}
   onError={error => console.warn(error)}
   onFinish={() => this.setState({ isLoadingComplete: true})}
   />
 )
}
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