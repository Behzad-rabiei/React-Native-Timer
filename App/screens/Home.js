import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { PickerTime } from "../components/PickerTime";
import { Start, Pause } from "../components/Button";
import { Time } from "../components/Time";

class Home extends Component {
  render() {
    const { buttonStatus } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {buttonStatus === "Start" ? <PickerTime /> : <Time />}
        <Start />
        {buttonStatus === "cancel" ? <Pause /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { buttonStatus } = state;
  return {
    buttonStatus
  };
};

export default connect(mapStateToProps)(Home);
