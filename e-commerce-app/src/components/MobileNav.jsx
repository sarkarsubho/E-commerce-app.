import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MobileNav = ({
  ProfilePic,
  handlelogout,
  setVisibility,
  visibility,
}) => {
  const { user, token } = useSelector((state) => state.auth);
  const data = useSelector((state) => state.cart.data);
  return (
    <>
      <Flex
        gap={"20px"}
        padding="20px"
        position="fixed"
        zIndex={"100"}
        top={"0"}
        left={"0"}
        width={"100vw"}
        backgroundColor="lightgray"
        height={"100vh"}
        paddingRight={"20px"}
        direction={"column"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Box>
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
            colorScheme={"pink"}
            fontSize={"30px"}
            onClick={() => {
              setVisibility(!visibility);
            }}
          >
            {" "}
            X
          </Button>
        </Flex>
        <Link to="/cart">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"teal.500"}
            rounded={"5px"}
            padding={"6px"}
            onClick={() => {
                setVisibility(!visibility);
              }}
          >
            <Button
              width={"max-content"}
              variant={"ghost"}
              w={"40px"}
              backgroundColor={"teal.500"}
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
            <Text fontWeight={"600"} color={"white"}>
              {" "}
              View Cart
            </Text>
          </Flex>
        </Link>

        <Button
          rightIcon={<TbLogout fontSize={"25px"}></TbLogout>}
          colorScheme={"red"}
          onClick={handlelogout}
        >
          Logout
        </Button>
      </Flex>
    </>
  );
};
