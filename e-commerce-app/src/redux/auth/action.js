import axios from "axios";
import * as types from "./action.types";

export const login = (logindata) => (dispatch) => {
  dispatch({ type: types.LOGINREQUEST });
  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/login`, logindata)
    .then((res) => {
      console.log(res.data);
    //   dispatch({ type: types.LOGINSUCCESS, payload: res.data.token });
      return {status:types.LOGINSUCCESS,user:logindata.username,token:res.data.token}
    })
    .catch((er) => {
        dispatch({type:types.LOGINERROR})
        return {status:types.LOGINERROR}
    });
};

export const register = (registerData) => (dispatch) => {
  dispatch({ type: types.REGISTERREQUEST });
  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`,registerData)
    .then((res) => {
        console.log("registration Success",res)
      dispatch({ type: types.REGISTERSUCCESS, payload: res.data });
      return types.REGISTERSUCCESS
    })
    .catch((er) => {
      console.log("Register error", er);
      dispatch({ type: types.REGISTERERROR, payload: er });
      return er
    });
};
