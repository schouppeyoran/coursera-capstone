import { Image, Text, VStack, Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ title, description, imageSrc, price}) => {
  return (
    <Box
      backgroundColor="#EDEFEE"
      textColor="black"
      rounded="3xl"
      paddingBottom={5}
      height="100%"
      display="flex"
      flexDirection="column"
      as="article"
    >
      <VStack spacing={3} align="stretch" flex={1}>
        <Image src={imageSrc} alt={title} rounded="16px" width="100%" objectFit="cover"/>
        <Flex flexDirection="column" flex={1} paddingX={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={2}>
            <h3>{title}</h3>
            <h3 style={{color: "red"}}>${price}</h3>
          </Flex>
          <Text flex={1}>{description}</Text>
          <Link
            to="/order"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <h3 style={{paddingRight:"10px"}}>Order a delivery</h3>
              <FontAwesomeIcon icon={faMotorcycle}/>
            </Box>
          </Link>
        </Flex>
      </VStack>
      </Box>
  );
};

export default Card;
