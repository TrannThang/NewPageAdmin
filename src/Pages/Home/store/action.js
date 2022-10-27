import {
  GET_ZING_NEW_CONTENT,
  SAVE_ZING_NEW_CONTENT,
  SET_LOADING,
} from "./contants";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
export const getZingNewContent = (payload) => {
  return {
    type: GET_ZING_NEW_CONTENT,
    payload,
  };
};
export const saveZingNewContent = (payload) => {
  return {
    type: SAVE_ZING_NEW_CONTENT,
    payload,
  };
};
