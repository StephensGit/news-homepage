import React from "react";

import { Box, Text } from "@chakra-ui/react";

const SideStories = () => {
  return (
    <Box pt="32px" pr="24px" pl="24px" h="512px" backgroundColor="#00001A">
      <Text
        as="h2"
        fontSize="40px"
        lineHeight="40px"
        fontWeight="bold"
        color="#E9AA52"
        mb="34px"
      >
        New
      </Text>
      <Box mt="0" borderBottom="1px solid #5E607A">
        <Text as="h3" color="#FFFDFA" fontSize="20px" fontWeight="extrabold">
          Hydrogen VS Electric Cars
        </Text>
        <Text
          as="p"
          color="#C5C6CE"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
          mt="5px"
          mb="29px"
        >
          Will hydrogen-fueled cars ever catch up to EVs?
        </Text>
      </Box>

      <Box mt="0" borderBottom="1px solid #5E607A" mb="29px">
        <Text
          as="h3"
          color="#FFFDFA"
          fontSize="20px"
          fontWeight="extrabold"
          mt="31px"
        >
          Hydrogen VS Electric Cars
        </Text>
        <Text
          as="p"
          color="#C5C6CE"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
          mt="5px"
          mb="29px"
        >
          Will hydrogen-fueled cars ever catch up to EVs?
        </Text>
      </Box>

      <Box mt="0">
        <Text as="h3" color="#FFFDFA" fontSize="20px" fontWeight="extrabold">
          Hydrogen VS Electric Cars
        </Text>
        <Text
          as="p"
          color="#C5C6CE"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
          mt="5px"
        >
          Will hydrogen-fueled cars ever catch up to EVs?
        </Text>
      </Box>
    </Box>
  );
};

export default SideStories;
