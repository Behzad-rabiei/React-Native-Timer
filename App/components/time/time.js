import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { minusSeconds, changeStartButtonStatus } from "../../actions/index";
import styles from "./styles";
import { getRemaining } from "./func";

class Time extends Component {
  interval = null;

  //  I try another ways for doing minusSeconds and at the I do this way but I think there is a better way for doing that
  // componentDidUpdate(prevProp) {
  //   const { buttonStatus, dispatch, remainingSeconds } = this.props;
  //   if (remainingSeconds === 0 && buttonStatus === "stop") {
  //     clearInterval(this.interval);
  //     this.interval = null;
  //     dispatch(changeStartButton("start"));
  //   } else if (buttonStatus === "stop" && prevProp.buttonStatus === "start") {
  //     this.interval = setInterval(() => {
  //       this.start();
  //     }, 985);
  //   } else if (buttonStatus === "start" && prevProp.buttonStatus === "stop") {
  //     clearInterval(this.interval);
  //     this.interval = null;
  //   }
  // }

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
  const { StartButtonStatus, remainingSeconds } = state;
  return {
    StartButtonStatus,
    remainingSeconds
  };
};
export default connect(mapStateToProps)(Time);
