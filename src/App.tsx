import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
