import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";

const HeadingComponent = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""}  Games`;
  return (
    <Heading as="h1" marginBottom={3} fontSize={"4xl"}>
      {heading}
    </Heading>
  );
};

export default HeadingComponent;
