import React from "react";

import { Box, Text, VStack, HStack } from "@chakra-ui/react";

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
  console.log(data);

  return (
    <HStack h="128px">
      <img
        style={{ height: "129px", width: "auto", marginRight: "16px" }}
        src={image}
        alt="image"
      />
      <VStack alignItems="start">
        <Text
          as="h3"
          color="#C5C6CE"
          fontSize="32px"
          fontWeight="extrabold"
          lineHeight="32px"
        >
          {data?.heading}
        </Text>
        <Text
          as="h4"
          color="#00001A"
          fontSize="18px"
          fontWeight="extrabold"
          lineHeight="24px"
        >
          {data?.subHeading}
        </Text>
        <Text
          as="p"
          color="#5E607A"
          fontSize="15px"
          lineHeight="26px"
          fontWeight="normal"
        >
          {data?.body}
        </Text>
      </VStack>
    </HStack>
  );
};

export default StoryItem;
