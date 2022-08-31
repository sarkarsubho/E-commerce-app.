import { Box, Flex, Heading, Text , List,
    ListItem,
    ListIcon} from "@chakra-ui/react";
import React from "react";

export const DetailsPage = () => {
  return (
    <Box>
      <Flex>
        <Image></Image>
        <Box>
          <Heading as={"h2"} size={"md"}>
            heading
          </Heading>
          <Heading as={"h2"} size={"md"}>
            {" "}
            price
          </Heading>
        </Box>
        <Text>Details</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={Md} color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
      </Flex>
    </Box>
  );
};
