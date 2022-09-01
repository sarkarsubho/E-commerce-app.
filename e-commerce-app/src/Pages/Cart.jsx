import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxCart from "../components/BoxCart";
import { deleteCartData, getCartData, updateCartData } from "../redux/cart/action";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlinePlus ,AiOutlineMinus } from "react-icons/ai";
export const Cart = () => {
    const data = useSelector((state) => state.cart.data);
    const dispatch = useDispatch();
    let totalblance=0;
    for(let i=0;i<data.length;i++){
      totalblance+= data[i].price*data[i].qnt
    }
    const handleQnt=(e,val)=>{
      let updateddata={...e,qnt: e.qnt+val};
      dispatch(updateCartData(updateddata))
      // console.log("updateddata",updateddata)
    }
    const deleteItem =(id)=>{
      dispatch(deleteCartData(id));
      console.log(id)
    }
  
    useEffect(() => {
      dispatch(getCartData());
    }, [dispatch]);
    return (<>
    <Text fontSize={"xl"} fontWeight={600}> Total Payable Amount :-{totalblance}</Text>
      <Grid  templateColumns='repeat(3, 1fr)' gap={6} w="80%" placeItems={"center"} margin={" 40px auto"}>
        
      {data.map((e) => {
        return <Box  key={e.id}>
        <BoxCart data={e}></BoxCart>
        {/* add Buton */}
        <Flex gap={"10px"} justifyContent={"center"} mt="10px">
          <Button colorScheme={"teal"} disabled={e.qnt<=1} onClick={()=>handleQnt(e,-1)}>
           <AiOutlineMinus fontSize={"20px"}></AiOutlineMinus>
          </Button>
          <Button colorScheme={"teal"}>{e.qnt}</Button>
          <Button colorScheme={"teal"} onClick={()=>handleQnt(e,1)}>
            <AiOutlinePlus fontSize={"20px"}></AiOutlinePlus>
          </Button>
        </Flex>

        {/* Buynow & remove */}
        <Flex justifyContent={"space-around"} mt={"10px"} gap="10px">
          <Button rightIcon={<BsFillBagCheckFill></BsFillBagCheckFill>} colorScheme={"green"}>Buy now</Button>
          <Button rightIcon={<MdOutlineDeleteForever fontSize={"23px"} onClick={()=>deleteItem(e.id)}></MdOutlineDeleteForever>} colorScheme={"red"}>Remove</Button>
        </Flex>
        </Box>
      })}
    </Grid>
    </>
    );
};
