import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxCart from "../components/BoxCart";
import { getData } from "../redux/app/action";

export const Home = () => {
  const data = useSelector((state) => state.app.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Box>
      {data.map((e) => {
        return <BoxCart key={e.id} data={e}></BoxCart>;
      })}
    </Box>
  );
};
