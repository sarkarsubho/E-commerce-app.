import { GETDATAERROR, GETDATAREQUEST, GETDATASUCCESS } from "./action.types";

const initState = {
  data: [],
  loading: false,
  error: false,
};

export const appReduser = (state = initState, { type, payload }) => {
  switch (type) {
    case GETDATAREQUEST:
      return { ...state, loading: true, error: false };
    case GETDATASUCCESS:
      return { ...state, loading: true, error: false, data: payload };
    case GETDATAERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
