import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { minusSeconds, changeStartButtonStatus } from "../../actions/index";
import styles from "./styles";
import { getRemaining } from "./func";

class Time extends Component {
  interval = null;

  componentDidMount() {
    const { StartButtonStatus, dispatch, remainingSeconds } = this.props;
    if (remainingSeconds === 0) {
      clearInterval(this.interval);
      this.interval = null;
      dispatch(changeStartButtonStatus("start"));
    } else if (StartButtonStatus === "cancel") {
      this.interval = setInterval(() => {
        this.start();
      }, 985);
    }
  }

  componentDidUpdate(prevProp) {
    const {
      StartButtonStatus,
      dispatch,
      remainingSeconds,
      PauseButtonStatus
    } = this.props;
    if (remainingSeconds === 0 && StartButtonStatus === "cancel") {
      clearInterval(this.interval);
      this.interval = null;
      dispatch(changeStartButtonStatus("start"));
    } else if (
      PauseButtonStatus === "pause" &&
      prevProp.PauseButtonStatus === "resume"
    ) {
      this.interval = setInterval(() => {
        this.start();
      }, 985);
    } else if (
      PauseButtonStatus === "resume" &&
      prevProp.PauseButtonStatus === "pause"
    ) {
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
    dispatch(minusSeconds());
  };

  render() {
    const { remainingSeconds } = this.props;
    const { minutes, seconds } = getRemaining(remainingSeconds);
    const time = `${minutes}:${seconds}`;
    return <Text style={styles.text}>{time}</Text>;
  }
}

const mapStateToProps = state => {
  const { StartButtonStatus, remainingSeconds, PauseButtonStatus } = state;
  return {
    StartButtonStatus,
    PauseButtonStatus,
    remainingSeconds
  };
};
export default connect(mapStateToProps)(Time);
