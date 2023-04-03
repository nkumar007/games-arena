import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`, // screens wider and above 1024
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;