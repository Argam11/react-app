import * as types from "./types";

export const homeAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.TEST,
      data,
    });
  };
};
