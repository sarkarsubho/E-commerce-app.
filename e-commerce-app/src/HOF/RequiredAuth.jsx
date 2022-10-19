import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({children}) => {
    let {token}=useSelector((state)=>state.auth)
    // console.log(isAuth,token)
    const location=useLocation();
    if(token){
        return children
    }else{
        return <Navigate to={"/register"} state={{from:location}} ></Navigate>;
    }


};
