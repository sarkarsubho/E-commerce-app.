import {
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Image,
  Grid,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateData } from "../redux/app/action";
import { getCartData, postData } from "../redux/cart/action";
import { Loader } from "../components/Loader";

export const DetailsPage = () => {
  const cartdata = useSelector((state) => state.cart.data);
  const data = useSelector((state) => state.app.data);
   console.log(data,"data")
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singledata, setSingledata] = useState({});
  const [review, setReview] = useState("");
  //  console.log(id ," id from useParams")
  let added = cartdata.filter((e) => e.productId === id);
  // console.log("added", added);

  const addToCart = () => {
    let {title,price,detail,image,review,_id}=singledata;
    let cartdata = {title,price,detail,image,review,productId:_id, qnt: 1 };
    dispatch(postData(cartdata));
    console.log(cartdata);
  };

  const addReview = () => {
    let newreview = { body: review };
    let updateddata = { ...singledata };
    updateddata.review.push(newreview);
    console.log(updateddata);
    dispatch(updateData(updateddata));
    setReview("");
  };

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (data.length === 0 ) {
      axios.get(`/products/${id}`).then((res) => {
        setSingledata(res.data);
        console.log(res.data,"from fetch");
      });
      
    } else {
      let sd = data.filter((e) => {
        return e._id === id;
      });
      console.log(data,sd[0],"ejjjdjd")
      setSingledata(sd[0]);
    }
  }, [id, data, cartdata]);
  console.log(data);

  if (Object.keys(singledata).length === 0) {
    console.log("undefined");
    return <Loader></Loader>;
  }

  return (
    <Grid
      width={"80%"}
      height={"80vh"}
      placeItems={"center"}
      margin={"auto"}
      textAlign="left"
      padding={"30px"}
    >
      <Flex direction={["column", "column", "column", "row"]}>
        <Image src={singledata?.image}></Image>
        <Flex direction={"column"} gap="30px">
          <Heading as={"h2"} size={"md"}>
            {singledata?.title}
          </Heading>
          <Heading as={"h2"} size={"md"}>
            {" "}
            ₹.{singledata?.price} /-
          </Heading>

          <Text fontSize={"21px"} fontWeight={600}>
            Details
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {singledata?.detail?.a}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {singledata?.detail?.b}
            </ListItem>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {singledata?.detail?.c}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {singledata?.detail?.d}
            </ListItem>
          </List>
          {/* review */}
          <Text fontSize={"21px"} fontWeight={600}>
            Review
          </Text>

          <List spacing={3}>
            {singledata?.review?.map((e, i) => {
              return (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  {e.body}
                </ListItem>
              );
            })}
          </List>

          <Flex alignItems={"end"} gap="20px">
            <Text mb="8px" fontSize={"15px"} fontWeight={600}>
              Give Your Review
            </Text>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="give your consern here"
              size="sm"
            />
            <Button
              colorScheme={"green"}
              disabled={!review}
              onClick={addReview}
            >
              {" "}
              Post
            </Button>
          </Flex>
          {added[0]?.qnt >= 1 ? (
            <Link to="/cart">
              <Button> Already Added Goto cart</Button>
            </Link>
          ) : (
            <Button colorScheme={"teal"} onClick={addToCart}>
              {" "}
              Add To Cart
            </Button>
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};
