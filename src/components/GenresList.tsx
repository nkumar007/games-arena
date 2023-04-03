import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/optimize-image";
const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="10px">
            <Skeleton isLoaded={isLoading} width="200px" borderRadius="4px">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="4px"
                boxSize="32px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </Skeleton>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
