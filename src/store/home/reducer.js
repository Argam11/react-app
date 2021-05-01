import * as types from "./types";

const initialState = {
  data: 11,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.TEST: {
      return {
        ...state,
        data: action.data,
      };
    }
    default:
      return state;
  }
}

export default homeReducer;
