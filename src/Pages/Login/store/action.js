import { LOGIN_REQUEST, SAVE_INFO_LOGIN, SET_LOADING } from "./contants";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
};
export const saveInfoLogin = (payload) => {
  return {
    type: SAVE_INFO_LOGIN,
    payload,
  };
};
