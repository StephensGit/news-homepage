import React from "react";
import imageDesktop from "../images/image-web-3-desktop.jpg";
import imageMobile from "../images/image-web-3-mobile.jpg";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Stack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

const MainStory = () => {
  const [isLargerThan686] = useMediaQuery("(min-width: 686px)");

  return (
    <Box
      backgroundColor="#FFF"
      maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "730px" }}
    >
      <Image src={isLargerThan686 ? imageDesktop : imageMobile} alt="image" />
      <Stack mt="24px" direction={["column", "column", "row", "row"]}>
        <Heading
          as="h1"
          mt={3}
          minWidth={{ base: "100%", sm: "100%", md: "50%" }}
          color="#00001A"
          fontSize={{ base: "40px", md: "56px", lg: "56px" }}
          fontFamily="Inter"
          fontWeight="extrabold"
          lineHeight={{ base: "40px", md: "56px", lg: "56px" }}
        >
          The Bright Future of Web 3.0?
        </Heading>
        <Stack alignItems="start" minWidth={["100%", "100%", "181px"]}>
          <Text
            mt={2}
            mb={3}
            as="p"
            color="#5E607A"
            fontSize="15px"
            lineHeight="26px"
          >
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </Text>
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default MainStory;
