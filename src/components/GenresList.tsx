import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/optimize-image";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="10px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius="4px"
              boxSize="32px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
