import React from "react";

import "./App.css";

import { Box } from "@chakra-ui/react";

import Header from "./components/Header";
import MainStory from "./components/MainStory";
import SideStories from "./components/SideStories";
import StoryItem from "./components/StoryItem";

import image1 from "./images/image-retro-pcs.jpg";
import image2 from "./images/image-top-laptops.jpg";
import image3 from "./images/image-gaming-growth.jpg";

const storyItemsData = [
  {
    heading: "01",
    subHeading: "Reviving Retro PCs",
    body: "What happens when old PCs are given modern upgrades?",
    image: image1,
  },
  {
    heading: "02",
    subHeading: "Top 10 Laptops of 2022",
    body: "Our best picks for various needs and budgets.",
    image: image2,
  },
  {
    heading: "03",
    subHeading: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
    image: image3,
  },
];

function App() {
  return (
    <Box className="App" mb="80px">
      <Box px={4}>
        <Header />
      </Box>

      <Box
        px={4}
        display="flex"
        justifyContent="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <MainStory />
        <SideStories />
      </Box>

      <Box
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        px={{ base: "4", sm: "4", md: "4", lg: "0" }}
        mx="auto"
        mt="64px"
        justifyContent="space-between"
        maxWidth={{ lg: "1110px" }}
      >
        {storyItemsData?.map((data) => (
          <StoryItem image={data?.image} data={data} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
