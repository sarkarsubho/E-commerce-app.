import { Badge, Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BoxCart({data}) {
  return (
    <Link to={`/product/${data.id}`}>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={data.image} alt={"imageAlt"} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
         
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {data.title}
        </Box>

        <Box>
          {data.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / Rs.
          </Box>
        </Box>

        {/* <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}

      </Box>
    </Box>
    </Link>
  );
}
