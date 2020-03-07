/* eslint-disable react/forbid-prop-types */
import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

Container.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.any
};

export default Container;
