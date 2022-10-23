import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { Box, Center, Grid, GridItem } from "@chakra-ui/react";

import MainStory from "./components/MainStory";
import SideStories from "./components/SideStories";
import StoryItem from "./components/StoryItem";

function App() {
  return (
    <div className="App">
      <Grid
        h="640px"
        maxW="1110px"
        m="auto"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={4} colSpan={2} bg="tomato">
          <MainStory />
        </GridItem>
        <GridItem rowSpan={4} colSpan={1} bg="papayawhip">
          <SideStories />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="papayawhip">
          <StoryItem />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="tomato">
          <StoryItem />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="tomato">
          <StoryItem />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
