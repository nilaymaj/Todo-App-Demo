import React, { Component } from 'react';
import Notes from './components/notes';
import * as Font from 'expo-font';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import { AppLoading } from 'expo';
import { Root, Container } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

loadFonts = () => {
  return Font.loadAsync({
    Roboto: Roboto,
    Roboto_medium: RobotoMedium
  });
};

class App extends Component {
  state = { fontsLoaded: false };
  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={() => loadFonts()}
          onFinish={() => this.setState({ fontsLoaded: true })}
        ></AppLoading>
      );
    } else
      return (
        <Root>
          <Container>
            <Notes></Notes>
          </Container>
        </Root>
      );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
