import axios from "axios"
import { GETDATAERROR, GETDATAREQUEST, GETDATASUCCESS, UPDATEDATAERROR, UPDATEDATAREQUEST } from "./action.types"

export const getData=()=>(dispatch)=>{
    dispatch({type:GETDATAREQUEST})
  axios.get("/products").then(res=>{
    console.log(res.data);
    dispatch({type:GETDATASUCCESS,payload:res.data})
  }).catch(er=>{
    dispatch({type:GETDATAERROR})
  })
}

export const updateData=(payload)=>(dispatch)=>{
    dispatch({type:UPDATEDATAREQUEST})
    axios.patch(`/products/${payload._id}`,payload).then(res=>{
      console.log(res.data);
      dispatch(getData())
    }).catch(er=>{
      dispatch({type:UPDATEDATAERROR})
    })
}