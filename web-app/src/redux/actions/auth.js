import Parse from "parse";

import { REDIRECT_SUCCESS, LOGIN_SUCCESS, AUTH_ERROR } from "./types";

export const loginGoogle = () => async (dispatch) => {
  try {
    const res = await Parse.Cloud.run("GoogleSignIn");
    dispatch({
      type: REDIRECT_SUCCESS,
      payload: res,
    });
  } catch (error) {
    if (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error,
      });
    }
  }
};

export const getTokenGoogle = (params) => async (dispatch) => {
  try {
    // Get the Authentication Data
    const res = await Parse.Cloud.run("GoogleToken", params);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    if (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error,
      });
    }
  }
};
