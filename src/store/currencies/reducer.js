import * as types from "./types";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function currenciesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENCIES: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case types.ADD_CURRENCIES: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case types.EDIT_CURRENCIES: {
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        }),
      };
    }
    case types.DELETE_CURRENCIES: {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}

export default currenciesReducer;
