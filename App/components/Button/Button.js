import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { changeStartButton } from "../../actions/index";

class Button extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    dispatch: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    buttonStatus: PropTypes.string
  };

  handlePress = () => {
    const { dispatch, buttonStatus } = this.props;
    if (buttonStatus === "start") {
      dispatch(changeStartButton("stop"));
    } else if (buttonStatus === "stop") {
      dispatch(changeStartButton("start"));
    }
  };

  render() {
    const { buttonStatus } = this.props;
    return (
      <View>
        {buttonStatus === "start" ? (
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={this.handlePress}
          >
            <Text style={styles.textStart}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.buttonStart, styles.buttonStop]}
            onPress={this.handlePress}
          >
            <Text style={styles.textStop}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
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
