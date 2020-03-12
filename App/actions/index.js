import {
  CHANGE_BUTTON_STATUS,
  MINUS_SECONDS,
  SET_REMAINING_SECONDS
} from "./actionsType";

export const changeStartButton = status => {
  return {
    type: CHANGE_BUTTON_STATUS,
    value: status
  };
};

export const minusSeconds = () => {
  return {
    type: MINUS_SECONDS
  };
};

export const setRemainingSeconds = seconds => {
  return {
    type: SET_REMAINING_SECONDS,
    value: seconds
  };
};
