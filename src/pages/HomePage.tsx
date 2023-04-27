import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenresList from "../components/GenresList";
import HeadingComponent from "../components/HeadingComponent";
import PlatformSelector from "../components/PlatformSelector";
import SortByOrder from "../components/SortByOrder";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: ` "aside main"`, // screens wider and above 1024
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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
    </>
  );
};

export default HomePage;
