import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import { LOGINERROR, LOGINSUCCESS } from "../redux/auth/action.types";

export function Login() {
  const {isAuth} = useSelector((state) => state.auth);
  console.log(isAuth)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
 const location =useLocation();
  const fetchdata = async (er) => {
    let data = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${er.user}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${er.token}`,
        },
      }
    );

    let userData = await data.json();
    

    dispatch({ type: LOGINSUCCESS, payload: userData });
    console.log(userData,"location",location);
    navigate("/");
  };

  const handleSubmmit = () => {
    let logindata = { password, username };
    console.log(logindata);
    dispatch(login(logindata)).then((res) => {
      console.log(res);
      if (res.status === LOGINERROR) {
        // have to impliment tosts

        alert("Invalid Email or Password .");
      }
      if (res.status === LOGINSUCCESS) {
        console.log(res);

        fetchdata(res);
        
      }
    });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>User Name</FormLabel>
              <Input
                type={"text"}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmmit}
              >
                Login
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have a Account ?{" "}
                  <Link to={"/register"}>
                    <Text as={"span"} color={"yellowgreen"} fontWeight={"600"}>
                      Register
                    </Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
