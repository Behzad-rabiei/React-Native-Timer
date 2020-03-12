import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Time } from "../components/Time";

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
