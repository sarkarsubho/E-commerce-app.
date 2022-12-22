import axios from "axios";
import * as types from "./action.types";

export const login = (logindata) => (dispatch) => {
  dispatch({ type: types.LOGINREQUEST });
  return axios
    .post(`/login`, logindata)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.LOGINSUCCESS, payload: res.data});

      return {status:types.LOGINSUCCESS}
    })
    .catch((er) => {
        dispatch({type:types.LOGINERROR})
        return {status:types.LOGINERROR}
    });
  // return axios
  //   .post("https://reqres.in/api/login", {
  //     email: "eve.holt@reqres.in",
  //     password: "cityslicka",
  //   })
  //   .then((res) => {
  //     console.log("returned form the api", res.data);

  //     localStorage.setItem("token", res.data.token);
  //     // localStorage.removeItem("token")
  //   });
};

export const register = (registerData) => (dispatch) => {
  dispatch({ type: types.REGISTERREQUEST });
  
  return axios
    .post(
      `/register`,
      registerData,
      { headers: { "Access-Control-Allow-Origin": "*" , "Content-Type":"application/json"} }
    )
    .then((res) => {
      console.log("registration Success", res);
      dispatch({ type: types.REGISTERSUCCESS, payload: res.data });
      return types.REGISTERSUCCESS;
    })
    .catch((er) => {
      console.log("Register error", er);
      dispatch({ type: types.REGISTERERROR, payload: er });
      return er;
    });
};
