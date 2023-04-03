import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkelitonCard = () => {
  return (
    <Card borderRadius="10px" overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkelitonCard;
