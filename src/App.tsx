import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortByOrder from "./components/SortByOrder";

import HeadingComponent from "./components/HeadingComponent";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`, // screens wider and above 1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="20px">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={3}>
          <HeadingComponent />
          <Flex gap={3} marginBottom={2}>
            <PlatformSelector />
            <SortByOrder />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
