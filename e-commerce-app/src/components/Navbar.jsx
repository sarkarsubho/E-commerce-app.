import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { IoMdCart } from "react-icons/io";
import { RiHomeSmileFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { loadData, removeData, saveData } from "../utils/localStorage";
import { TbLogout } from "react-icons/tb";
import { HiOutlineLogin } from "react-icons/hi";
import { LOGOUT } from "../redux/auth/action.types";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  let ProfilePic = loadData("Profile_pic");
  console.log(ProfilePic);
  const data = useSelector((state) => state.cart.data);
  const { user, token } = useSelector((state) => state.auth);
  const [visibility, setVisibility] = useState(false);
 
  const dispatch = useDispatch();

  

  const handlelogout = () => {
    removeData("Profile_pic");
    removeData("userDtl");
    removeData("token");
    dispatch({ type: LOGOUT });
  };
  return (
    <Flex className="nav" justifyContent={"space-between"} flexWrap={"wrap"}>
      <Link to="/">
        <Heading as={"h2"} size={"lg"}>
          E-commerce app.
        </Heading>
      </Link>

      <Box display={["none", "none", "block", "block"]}>
        <Link to="/">
          <Button
            colorScheme={"teal"}
            leftIcon={<RiHomeSmileFill></RiHomeSmileFill>}
          >
            {" "}
            Home
          </Button>
        </Link>
      </Box>

      <Button
        display={["block", "block", "none", "none"]}
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <GiHamburgerMenu fontSize={"35px"}></GiHamburgerMenu>
      </Button>

      {token ? (
        <Flex gap={"20px"} justifyContent={"space-between"}>
          <Link to="/cart">
            <Button
              width={"max-content"}
              variant={"ghost"}
              w={"40px"}
              leftIcon={<IoMdCart fontSize={"30px"}></IoMdCart>}
            >
              {" "}
              <Text
                as={"span"}
                marginLeft="4px"
                rounded={"50%"}
                h="20px"
                w={"20px"}
                color={"teal"}
                bg={"cyan"}
                position="absolute"
                left={"6px"}
                top={"-3px"}
              >
                {data.length}
              </Text>
            </Button>
          </Link>

          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Box  >
              
              
              <Tooltip
                color={"white"}
                rounded={"4px"}
                hasArrow
                label="ProfilePic"
                placement="auto"
                
              >
                
                <Image
                  rounded={"50%"}
                  w="40px"
                  h="40px"
                  // zIndex={3}
                  src={
                    ProfilePic
                      ? ProfilePic
                      : `https://cdn-icons-png.flaticon.com/128/580/580430.png`
                  }
                ></Image>
              </Tooltip>
            </Box>
            <Text fontWeight={"700"} fontSize={"20px"}>
              {" "}
              {user.name ? user.name : "User"}
            </Text>
          </Flex>
          <Button
            rightIcon={<TbLogout fontSize={"25px"}></TbLogout>}
            colorScheme={"red"}
            onClick={handlelogout}
          >
            Logout
          </Button>
        </Flex>
      ) : (
        <Link to={"/login"}>
          <Button
            rightIcon={<HiOutlineLogin fontSize={"25px"}></HiOutlineLogin>}
            colorScheme={"teal"}
          >
            Login
          </Button>{" "}
        </Link>
      )}
    </Flex>
  );
};
