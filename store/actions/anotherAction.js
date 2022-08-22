import { JUST_ANOTHER } from "../types";

export const setAnother = (data) => async (dispatch) => {
    dispatch({
      type: JUST_ANOTHER,
      payload: data
    });
};
