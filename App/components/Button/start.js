import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import {
  changeStartButtonStatus,
  setRemainingSeconds,
  getMinutes,
  getSeconds
} from "../../actions/index";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Start",
      buttonStyle: styles.buttonStart,
      textStyle: styles.textStart
    };
  }

  componentDidUpdate(prevProp) {
    const { StartButtonStatus } = this.props;

    if (
      StartButtonStatus === "start" &&
      prevProp.StartButtonStatus === "cancel"
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        buttonText: "Start",
        buttonStyle: styles.buttonStart,
        textStyle: styles.textStart
      });
    }
  }

  handlePress = () => {
    const { dispatch, StartButtonStatus } = this.props;
    if (StartButtonStatus === "start") {
      this.setState({
        buttonText: "Cancel",
        buttonStyle: styles.buttonCancel,
        textStyle: styles.textCancel
      });
      dispatch(changeStartButtonStatus("cancel"));
      dispatch(setRemainingSeconds());
    } else if (StartButtonStatus === "cancel") {
      this.setState({
        buttonText: "Start",
        buttonStyle: styles.buttonStart,
        textStyle: styles.textStart
      });
      dispatch(changeStartButtonStatus("start"));
      dispatch(getSeconds(0));
      dispatch(getMinutes(0));
    }
  };

  render() {
    const { buttonText, buttonStyle, textStyle } = this.state;
    return (
      <TouchableOpacity style={buttonStyle} onPress={this.handlePress}>
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  const { StartButtonStatus, Minutes, Seconds } = state;
  return {
    StartButtonStatus,
    Minutes,
    Seconds
  };
};
export default connect(mapStateToProps)(Button);
