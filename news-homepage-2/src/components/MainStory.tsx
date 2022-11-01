import React from "react";
import image from "../images/image-web-3-desktop.jpg";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";

const MainStory = () => {
  return (
    <Box h="512px" backgroundColor="#FFF">
      <img
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
        src={image}
        alt="image"
      />
      <HStack mt="24px" h="181px" bg="#FFF">
        <Box
          w="50%"
          as="h1"
          color="#00001A"
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          fontWeight="extrabold"
          lineHeight={{ base: "40px", md: "56px", lg: "56px" }}
        >
          The Bright Future of Web 3.0?
        </Box>
        <VStack w="50%" alignItems="start">
          <Box as="p" color="#5E607A" fontSize="15px" lineHeight="26px">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Box>
          <Button
            w="185px"
            borderRadius="0px"
            h="48px"
            color="#fff"
            backgroundColor="#F15D51"
            fontSize="14px"
            lineHeight="24px"
            letterSpacing="4.38px"
          >
            READ MORE
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MainStory;
