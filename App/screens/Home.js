import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/container";
import { StartButton } from "../components/startButton.js";
import { TimeText } from "../components/timeText";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <TimeText />
        <StartButton />
      </Container>
    );
  }
}

export default Home;
