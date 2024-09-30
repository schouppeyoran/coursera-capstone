import { HStack, Image, Text, VStack, Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="#d3d3d3"
      textColor="black"
      rounded="3xl"
      paddingBottom={5}
      height="100%"  // Ensure the card takes full height
      display="flex"
      flexDirection="column"
      maxWidth="350px"
    >
      <VStack spacing={3} align="stretch" flex={1}>
        <Image src={imageSrc} alt={title} rounded="3xl" width="100%" objectFit="cover"/>
        <Flex flexDirection="column" flex={1} paddingX={4}>
          <h3>{title}</h3>
          <Text flex={1}>{description}</Text>
          <HStack spacing={2} marginTop="auto">
            <h3>Order a delivery</h3>
            <FontAwesomeIcon icon={faMotorcycle} />
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;