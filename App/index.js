import EStyleSheet from "react-native-extended-stylesheet";
import React from "react";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import store from "./config/store";

EStyleSheet.build({
  $black: "#000000",
  $orange: "#E49520",
  $white: "#E9F0F3",
  $red: "#FF1100"
});

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
