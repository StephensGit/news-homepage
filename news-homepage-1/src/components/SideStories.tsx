import React from "react";

import { Box, Divider, Heading, Text } from "@chakra-ui/react";

const SideStories = () => {
  return (
    <Box
      ml={{ base: "0px", sm: "0px", md: "0px", lg: "30px" }}
      mt={{ base: "64px", sm: "64px", md: "64px", lg: "0px" }}
      py={{ base: "24px", sm: "24px", md: "24px", lg: "32px" }}
      px={{ base: "21px", sm: "21px", md: "21px", lg: "24px" }}
      maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "350px" }}
      maxHeight={{ base: "auto", sm: "auto", md: "auto", lg: "511px" }}
      backgroundColor="#00001A"
    >
      <Heading
        as="h2"
        fontSize={{ base: "32px", sm: "32px", md: "32px", lg: "40px" }}
        lineHeight={{ base: "32px", sm: "32px", md: "32px", lg: "40px" }}
        fontWeight={700}
        color="#E9AA52"
        mb="35px"
      >
        New
      </Heading>

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
        >
          Will hydrogen-fueled cars ever catch up to EVs?
        </Text>
        <Divider color="red.400" my="31px" />
      </Box>

      <Box mt="0">
        <Text
          as="h3"
          color="#FFFDFA"
          fontSize="20px"
          fontWeight="extrabold"
          mt="31px"
        >
          The Downsides of AI Artistry
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
          What are the possible adverse effects of on-demand AI image
          generation?
        </Text>
        <Divider my="31px" />
      </Box>

      <Box mt="0">
        <Text as="h3" color="#FFFDFA" fontSize="20px" fontWeight="extrabold">
          Is VC Funding Drying Up?
        </Text>
        <Text
          as="p"
          color="#C5C6CE"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
          mt="5px"
        >
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </Text>
      </Box>
    </Box>
  );
};

export default SideStories;
