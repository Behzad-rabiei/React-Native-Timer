import React, { Component } from "react";
import { Container } from "../components/container";
import { StartButton } from "../components/startButton.js";

class Home extends Component {
  render() {
    return (
      <Container>
        <StartButton />
      </Container>
    );
  }
}

export default Home;
