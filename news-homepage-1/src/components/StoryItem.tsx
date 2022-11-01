import React from "react";

import { Heading, Image, Text, Stack } from "@chakra-ui/react";

type ItemProp = {
  heading: string;
  subHeading: string;
  body: string;
};

type ItemProps = {
  image?: string;
  data?: ItemProp;
};

const StoryItem = ({ image, data }: ItemProps) => {
  return (
    <Stack
      flexDirection="row"
      maxWidth={{ base: "auto", sm: "auto", md: "auto", lg: "350px" }}
      mt={{ base: "24px", sm: "24px", md: "24px", lg: "0" }}
      // mr={data?.heading === "03" ? 0 : 5}
    >
      <Image
        width="100px"
        height="auto"
        objectFit="cover"
        src={image}
        alt="image"
        mr="24px"
      />
      <Stack alignItems="start">
        <Heading
          as="h3"
          color="#C5C6CE"
          fontSize="32px"
          lineHeight="32px"
          fontWeight="extrabold"
        >
          {data?.heading}
        </Heading>
        <Heading
          as="h4"
          color="#00001A"
          fontSize="18px"
          fontWeight="extrabold"
          lineHeight="24px"
        >
          {data?.subHeading}
        </Heading>
        <Text
          as="p"
          color="#5E607A"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
        >
          {data?.body}
        </Text>
      </Stack>
    </Stack>
  );
};

export default StoryItem;
