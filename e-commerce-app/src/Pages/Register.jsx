import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/action";
import { REGISTERSUCCESS } from "../redux/auth/action.types";
import { Link, useNavigate } from "react-router-dom";
import { saveData } from "../utils/localStorage";

function reduser(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "username":
      return { ...state, username: action.payload };
    case "mobile":
      return { ...state, mobile: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      return state;
  }
}

const initstate = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: 0,
  description: "",
};

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatchState] = useReducer(reduser, initstate);
  console.log(state);

  const handleimg = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setImage(reader.result);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const signupHandller = () => {
    saveData("Profile_pic",image);
    dispatch(register(state)).then((res) => {
      console.log(res);
      if (res === REGISTERSUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} minW={"500px"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={state.name}
                  onChange={(e) =>
                    dispatchState({ type: "name", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="username" isRequired>
                <FormLabel> User Name</FormLabel>
                <Input
                  type="text"
                  value={state.username}
                  onChange={(e) =>
                    dispatchState({
                      type: "username",
                      payload: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Box>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  dispatchState({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  onChange={(e) =>
                    dispatchState({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile No.</FormLabel>

              <Input
                type="number"
                value={state.mobile}
                onChange={(e) =>
                  dispatchState({ type: "mobile", payload: e.target.value })
                }
              />
            </FormControl>
            <Input
              border={"1px solid lightgray"}
              rounded={"6px"}
              pl={"16px"}
              placeholder="Small Description "
              value={state.description}
              onChange={(e) =>
                dispatchState({
                  type: "description",
                  payload: e.target.value,
                })
              }
            ></Input>
            <FormControl id="mobile" isRequired>
              <FormLabel>Profile Pic.</FormLabel>
              <Flex direction={"row"}>
                <Input
                  type="file"
                  border={"none"}
                  onChange={(e) => handleimg(e)}
                />
                <Image
                  src={image}
                  w="50px"
                  rounded={"10px"}
                  alt="Profile pic"
                ></Image>
              </Flex>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={signupHandller}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to={"/login"}>
                  <Text as={"span"} color={"yellowgreen"} fontWeight={"600"}>
                    Login
                  </Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
