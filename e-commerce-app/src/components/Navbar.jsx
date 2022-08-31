import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"
export const Navbar = () => {
  return <Flex className="nav">
    <Link to="/">
        <Heading as={"h2"} size={"lg"}>E commerce app.</Heading>
    </Link>
    
    <Link to="/">
        <Button colorScheme={"teal"}> Home</Button>
    </Link>
    <Link to="/cart">
        <Button colorScheme={"pink"}> Cart</Button>
    </Link>
  </Flex>;
};
