import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsRating = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="md" borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticsRating;
