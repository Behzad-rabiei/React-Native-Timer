import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { PickerTime } from "../components/PickerTime";
import { Button } from "../components/Button";
import { Time } from "../components/Time";

class Home extends Component {
  render() {
    const { buttonStatus } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {buttonStatus === "start" ? <PickerTime /> : <Time />}
        <Button />
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
