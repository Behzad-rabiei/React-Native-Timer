import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { changeStartButton, setRemainingSeconds } from "../../actions/index";

class Button extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    dispatch: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    buttonStatus: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Start",
      style: styles.buttonStart
    };
  }

  handlePress = () => {
    const { dispatch, buttonStatus } = this.props;
    if (buttonStatus === "start") {
      this.setState({
        buttonText: "Cancel",
        style: styles.buttonCancel
      });
      dispatch(changeStartButton("cancel"));
      dispatch(setRemainingSeconds());
    } else {
      this.setState({
        buttonText: "Start",
        style: styles.buttonStart
      });
      dispatch(changeStartButton("start"));
    }
  };

  render() {
    const { buttonText, style } = this.state;
    return (
      <TouchableOpacity style={style} onPress={this.handlePress}>
        <Text style={styles.textStart}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  const { buttonStatus } = state;
  return {
    buttonStatus
  };
};
export default connect(mapStateToProps)(Button);
