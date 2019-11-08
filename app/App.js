import React, { Component } from 'react';
import TodoNotes from './components/notes';
import * as Font from 'expo-font';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import { AppLoading } from 'expo';
import { Root, Container, Header, Left, Body, Right, Title } from 'native-base';

// Load the fonts for app
loadFonts = () => {
  return Font.loadAsync({
    Roboto: Roboto,
    Roboto_medium: RobotoMedium
  });
};

class App extends Component {
  state = {
    appLoaded: false // Load fonts before rendering the main app
  };

  render() {
    if (!this.state.appLoaded)
      return (
        // The fonts aren't loaded (app just started), so render loading screen
        <AppLoading
          startAsync={() => loadFonts()} // Start loading fonts when rendered
          onFinish={() => this.setState({ appLoaded: true })} // Update the state when loaded
        ></AppLoading>
      );
    else
      return (
        // The fonts are loaded.
        <Root>
          <Header>
            <Left />
            <Body>
              <Title>ToDo App</Title>
            </Body>
            <Right />
          </Header>

          <Container>
            <TodoNotes></TodoNotes>
          </Container>
        </Root>
      );
  }
}

export default App;
