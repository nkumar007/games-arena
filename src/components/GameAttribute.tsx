import { Box, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  attributeName: string;

  children: ReactElement;
}

const GameAttribute = ({ attributeName, children }: Props) => {
  return (
    <Box>
      <Heading as="h2" fontWeight={"bold"} color={"GrayText"}>
        {attributeName}
      </Heading>
      {children}
    </Box>
  );
};

export default GameAttribute;
