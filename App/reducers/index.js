import {
  CHANGE_START_BUTTON_STATUS,
  CHANGE_PAUSE_BUTTON_STATUS,
  MINUS_SECONDS,
  GET_SECONDS,
  GET_MINUTES,
  SET_REMAINING_SECONDS
} from "../actions/actionsType";

const initalState = {
  StartButtonStatus: "start",
  PauseButtonStatus: "pause",
  Seconds: 0,
  Minutes: 0,
  remainingSeconds: 0
};

const rootReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case CHANGE_START_BUTTON_STATUS: {
      return {
        ...state,
        StartButtonStatus: actions.value
      };
    }
    case CHANGE_PAUSE_BUTTON_STATUS: {
      return {
        ...state,
        PauseButtonStatus: actions.value
      };
    }
    case MINUS_SECONDS: {
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1
      };
    }
    case GET_MINUTES: {
      return {
        ...state,
        Minutes: actions.value
      };
    }
    case GET_SECONDS: {
      return {
        ...state,
        Seconds: actions.value
      };
    }
    case SET_REMAINING_SECONDS: {
      return {
        ...state,
        remainingSeconds: state.Seconds + state.Minutes * 60
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
