import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/container";
import { Button } from "../components/Button.js";
import { Time } from "../components/time";

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Time />
        <Button />
      </Container>
    );
  }
}

export default Home;
