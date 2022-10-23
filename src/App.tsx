import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { Box, Center, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid
        h="640px"
        maxW="1440px"
        m="auto"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={2} bg="tomato" />
        <GridItem rowSpan={3} colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={1} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={1} bg="tomato" />
      </Grid>
    </div>
  );
}

export default App;
