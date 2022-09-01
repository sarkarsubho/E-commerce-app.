import {
   GETCARTDATAERROR, GETCARTDATAREQUEST, GETCARTDATASUCCESS, 
  POSTDATAERROR,
  POSTDATAREQUEST,
  POSTDATASUCCESS,
} from "./action.types";

const initState = {
  data: [],
  loading: false,
  error: false,
};

export const cartReduser = (state = initState, { type, payload }) => {
  switch (type) {
    case POSTDATAREQUEST:
      return { ...state, loading: true, error: false };
    case POSTDATASUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    case POSTDATAERROR:
      return { ...state, loading: false, error: false };
      case GETCARTDATAREQUEST:
      return { ...state, loading: true, error: false };
    case GETCARTDATASUCCESS:
      return { ...state, loading: true, error: false, data: payload };
    case GETCARTDATAERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
