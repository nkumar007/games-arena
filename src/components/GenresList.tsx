import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from "../services/optimize-image";
import useGameStore from "../store";

const GenresList = () => {
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="10px">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="4px"
                boxSize="36px"
                objectFit="cover"
              />

              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : ""}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
