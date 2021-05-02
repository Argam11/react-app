import * as types from "./types";
import api from "api/fbService";

export const getCurrenciesAction = () => {
  return async (dispatch) => {
    const data = await api.getCurrencies();

    dispatch({
      type: types.GET_CURRENCIES,
      payload: data,
    });
  };
};

export const addCurrencyAction = (currency) => {
  return async (dispatch) => {
    const data = await api.addCurrency(currency);

    dispatch({
      type: types.ADD_CURRENCIES,
      payload: data,
    });
  };
};

export const editCurrencyAction = (currency) => {
  return async (dispatch) => {
    const data = await api.editCurrency(currency);

    dispatch({
      type: types.EDIT_CURRENCIES,
      payload: data,
    });
  };
};

export const deleteCurrencyAction = (id) => {
  return async (dispatch) => {
    await api.deleteCurrency(id);

    dispatch({
      type: types.DELETE_CURRENCIES,
      payload: id,
    });
  };
};
