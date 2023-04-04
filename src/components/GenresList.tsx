import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/optimize-image";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="10px">
              <Skeleton isLoaded={!isLoading} fadeDuration={1}>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  borderRadius="4px"
                  boxSize="36px"
                  objectFit="cover"
                />
              </Skeleton>
              <Skeleton isLoaded={!isLoading} fadeDuration={1}>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </Skeleton>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
