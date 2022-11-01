import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
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
  },
  {
    heading: "01",
    subHeading: "Top 10 Laptops of 2022",
    body: "Our best picks for various needs and budgets.",
  },
  {
    heading: "01",
    subHeading: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
  },
];

function App() {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <div className="App">
      <Grid
        // h="640px"
        maxW={"1110px"}
        m="auto"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem h="511px" rowSpan={4} colSpan={[3, 3, 2]}>
          <MainStory />
        </GridItem>
        <GridItem h="511px" rowSpan={4} colSpan={1}>
          <SideStories />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <StoryItem image={image1} data={storyItemsData[0]} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <StoryItem image={image2} data={storyItemsData[1]} />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <StoryItem image={image3} data={storyItemsData[2]} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
