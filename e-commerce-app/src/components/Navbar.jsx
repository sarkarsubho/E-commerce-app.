import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { IoMdCart } from "react-icons/io";
import { RiHomeSmileFill } from "react-icons/ri";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const data = useSelector((state) => state.cart.data);
  return <Flex className="nav">
    <Link to="/">
        <Heading as={"h2"} size={"lg"}>E commerce app.</Heading>
    </Link>
    
    <Link to="/">
        <Button colorScheme={"teal"} leftIcon={<RiHomeSmileFill></RiHomeSmileFill>}> Home</Button>
    </Link>
    <Link to="/cart">
        <Button colorScheme={"pink"} leftIcon={<IoMdCart></IoMdCart>}> Cart <Text as={"span"} marginLeft="4px" rounded={"50%"} h="20px" w={"20px"} bg={"green"}>{data.length}</Text></Button>
    </Link>
  </Flex>;
};
