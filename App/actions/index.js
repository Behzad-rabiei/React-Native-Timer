import {
  CHANGE_START_BUTTON_STATUS,
  MINUS_SECONDS,
  GET_MINUTES,
  GET_SECONDS,
  SET_REMAINING_SECONDS
} from "./actionsType";

export const changeStartButtonStatus = status => {
  return {
    type: CHANGE_START_BUTTON_STATUS,
    value: status
  };
};

export const minusSeconds = () => {
  return {
    type: MINUS_SECONDS
  };
};

export const getMinutes = minutes => {
  return {
    type: GET_MINUTES,
    value: minutes
  };
};
export const getSeconds = seconds => {
  return {
    type: GET_SECONDS,
    value: seconds
  };
};

export const setRemainingSeconds = () => {
  return {
    type: SET_REMAINING_SECONDS
  };
};
