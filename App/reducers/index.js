import { CHANGE_START_BUTTON } from "../actions/actionsType";

const initalState = {
  startButtonStatus: true
};

const rootReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case CHANGE_START_BUTTON: {
      return {
        ...state,
        startButtonStatus: actions.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
