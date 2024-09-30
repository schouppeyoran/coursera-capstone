// ReviewCard.js
import { Image, Text, VStack, Box, HStack } from "@chakra-ui/react";
import Rating from "./Rating";

const ReviewCard = ({ name, profileImg, rating, comment}) => {
    return (
        <Box
            backgroundColor="#EDEFEE"
            textColor="black"
            rounded="3xl"
            paddingBottom={5}
            height="100%"
            display="flex"
            flexDirection="column"
            p={4}
            as="article"
        >
            <VStack spacing={3} align="stretch" flex={1}>
                <Rating rating={rating}/>
                <HStack>
                    <Image src={profileImg} alt={name} rounded="full" boxSize="50px" objectFit="cover"/>
                    <Text as="h3">{name}</Text>
                </HStack>
                <Text
                    maxW={{ base: "none", md: 48 }}
                    fontSize="md"
                >
                    "{comment}"</Text>
            </VStack>
        </Box>
    );
}

export default ReviewCard;