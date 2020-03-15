import {
  CHANGE_BUTTON_STATUS,
  MINUS_SECONDS,
  GET_SECONDS,
  GET_MINUTES
} from "../actions/actionsType";

const initalState = {
  buttonStatus: "start",
  remainingSeconds: 10,
  remainingMinutes: 10
};

const rootReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case CHANGE_BUTTON_STATUS: {
      return {
        ...state,
        buttonStatus: actions.value
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
        remainingMinutes: actions.value
      };
    }
    case GET_SECONDS: {
      return {
        ...state,
        remainingSeconds: actions.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
