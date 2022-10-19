import { loadData, saveData } from "../../utils/localStorage";
import * as types from "./action.types";
const initState = {
  token: loadData("token") || "",

  user: loadData("userDtl") || {},
};

export const authReduser = (state = initState, { type, payload }) => {
  switch (type) {
    case types.LOGINSUCCESS:
      saveData("userDtl", payload);
      saveData("token", payload.token);
      return { ...state, token: payload.token, user: payload };
    case types.LOGOUT:
      return {
        ...state,
        token: "",
        user: {},
      };
    default:
      return state;
  }
};
