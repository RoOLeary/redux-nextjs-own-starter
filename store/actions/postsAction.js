import { SET_DATA, SAMPLE_ERROR, SHOW_BERLS, IS_LOADING } from "../types";


export const setLoading = (l) => async (dispatch) => {
  try {
    dispatch({
      type: IS_LOADING,
      payload: l
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

export const setData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};


export const setBallsData = (t) => async (dispatch) => {
  console.log(t)
  try {
    dispatch({
      type: SHOW_BERLS,
      payload: t,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};