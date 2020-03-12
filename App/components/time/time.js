import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import {
  minusSeconds,
  changeStartButton,
  setRemainingSeconds
} from "../../actions/index";
import styles from "./styles";

const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const secondes = time - minutes * 60;
  return {
    minutes: formatNumber(minutes),
    secondes: formatNumber(secondes)
  };
};
class Time extends Component {
  interval = null;

  componentDidUpdate(prevProp) {
    const { buttonStatus, dispatch, remainingSeconds } = this.props;
    if (remainingSeconds === 0 && buttonStatus === "stop") {
      clearInterval(this.interval);
      this.interval = null;
      dispatch(changeStartButton("start"));
      dispatch(setRemainingSeconds(20));
    } else if (buttonStatus === "stop" && prevProp.buttonStatus === "start") {
      dispatch(minusSeconds());
      this.interval = setInterval(() => {
        this.start();
      }, 1000);
    } else if (buttonStatus === "start" && prevProp.buttonStatus === "stop") {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  start = () => {
    const { dispatch } = this.props;
    console.log("minus");
    dispatch(minusSeconds());
  };

  render() {
    const { remainingSeconds } = this.props;
    const { secondes, minutes } = getRemaining(remainingSeconds);
    const time = `${minutes}:${secondes}`;
    return <Text style={styles.text}>{time}</Text>;
  }
}

const mapStateToProps = state => {
  const { buttonStatus, remainingSeconds } = state;
  return {
    buttonStatus,
    remainingSeconds
  };
};
export default connect(mapStateToProps)(Time);
