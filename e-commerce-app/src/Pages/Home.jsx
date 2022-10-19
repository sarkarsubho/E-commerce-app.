import {SimpleGrid  } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxCart from "../components/BoxCart";
import { Loader } from "../components/Loader";
import { getData } from "../redux/app/action";
import { getCartData } from "../redux/cart/action";

export const Home = () => {
  const {data,loading} = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
    dispatch(getCartData());
  }, [dispatch]);
  if(loading){
    return <Loader></Loader>
  }

  return (
    <SimpleGrid  columns={[1,2, 3,4]} gap={6} w="80%" placeItems={"center"} margin={" 40px auto"}>
      {data.map((e) => {
        return <BoxCart key={e.id} data={e}></BoxCart>;
      })}
    </SimpleGrid>
  );
};
