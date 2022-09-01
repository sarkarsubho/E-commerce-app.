import {  Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxCart from "../components/BoxCart";
import { getData } from "../redux/app/action";
import { getCartData } from "../redux/cart/action";

export const Home = () => {
  const data = useSelector((state) => state.app.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(getCartData());
  }, [dispatch]);
  return (
    <Grid  templateColumns='repeat(4, 1fr)' gap={6} w="80%" placeItems={"center"} margin={" 40px auto"}>
      {data.map((e) => {
        return <BoxCart key={e.id} data={e}></BoxCart>;
      })}
    </Grid>
  );
};
