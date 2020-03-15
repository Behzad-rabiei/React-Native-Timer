import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { PickerTime } from "../components/PickerTime";
import { Start, Pause } from "../components/Button";
import { Time } from "../components/Time";

class Home extends Component {
  render() {
    const { StartButtonStatus } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {StartButtonStatus === "start" ? <PickerTime /> : <Time />}
        <Start />
        {StartButtonStatus === "cancel" ? <Pause /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { StartButtonStatus } = state;
  return {
    StartButtonStatus
  };
};

export default connect(mapStateToProps)(Home);
