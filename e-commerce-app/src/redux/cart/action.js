import axios from "axios";
import {
  DELETECARTDATAERROR,
  DELETECARTDATAREQUEST,
  GETCARTDATAERROR,
  GETCARTDATAREQUEST,
  GETCARTDATASUCCESS,
  POSTDATAERROR,
  POSTDATAREQUEST,
  POSTDATASUCCESS,
  UPDATECARTDATAERROR,
  UPDATECARTDATAREQUEST,
} from "./action.types";

export const postData = (payload) => (dispatch) => {
  dispatch({ type: POSTDATAREQUEST });
  axios
    .post("https://netmed-clone-v1-server.herokuapp.com/cart", payload)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POSTDATASUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: POSTDATAERROR });
    });
};

export const getCartData = () => (dispatch) => {
  dispatch({ type: GETCARTDATAREQUEST });
  axios
    .get("https://netmed-clone-v1-server.herokuapp.com/cart")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GETCARTDATASUCCESS, payload: res.data });
    })
    .catch((er) => {
      dispatch({ type: GETCARTDATAERROR });
    });
};

export const deleteCartData = (id) => (dispatch) => {
  dispatch({ type: DELETECARTDATAREQUEST });
  axios
    .delete(`https://netmed-clone-v1-server.herokuapp.com/cart/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getCartData());
    })
    .catch((er) => {
      dispatch({ type: DELETECARTDATAERROR });
    });
};

export const updateCartData=(payload)=>(dispatch)=>{
  dispatch({ type: UPDATECARTDATAREQUEST });
  axios
    .patch(`https://netmed-clone-v1-server.herokuapp.com/cart/${payload.id}`,payload)
    .then((res) => {
      console.log(res.data);
      dispatch(getCartData());
    })
    .catch((er) => {
      dispatch({ type: UPDATECARTDATAERROR });
    });
}
