import React, { Component } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Container } from "../components/container";
import { PickerTime } from "../components/PickerTime";
import { Start, Pause } from "../components/Button";
import { Time } from "../components/time";

const styles = EStyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center"
  }
});

class Home extends Component {
  render() {
    const { StartButtonStatus } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {StartButtonStatus === "start" ? <PickerTime /> : <Time />}
        <View style={styles.view}>
          <Start />
          {StartButtonStatus === "cancel" ? <Pause /> : null}
        </View>
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
