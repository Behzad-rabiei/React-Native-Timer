import { CHANGE_START_BUTTON } from "./actionsType";

export const changeStartButton = status => {
  return {
    type: CHANGE_START_BUTTON,
    value: status
  };
};
