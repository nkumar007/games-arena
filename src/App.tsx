import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`, // screens wider and above 1024
      }}
    >
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="tomato">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="cyan">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
