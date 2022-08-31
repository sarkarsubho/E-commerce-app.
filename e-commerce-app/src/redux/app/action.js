import axios from "axios"
import { GETDATAERROR, GETDATAREQUEST, GETDATASUCCESS } from "./action.types"

export const getData=()=>(dispatch)=>{
    dispatch({type:GETDATAREQUEST})
  axios.get("http://localhost:8080/product").then(res=>{
    console.log(res.data);
    dispatch({type:GETDATASUCCESS,payload:res.data})
  }).catch(er=>{
    dispatch({type:GETDATAERROR})
  })
}