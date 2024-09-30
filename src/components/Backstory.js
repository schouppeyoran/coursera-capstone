// Backstory.js
import chefsImg1 from './assets/BackStoryA.jpg';
import chefsImg2 from './assets/BackStoryB.jpg';
import { VStack, Heading, Text, Image, HStack, Box, Flex } from "@chakra-ui/react";

const Backstory = () => {
    return (
        <Box padding={4}>
            <Text as="h2">Our Story</Text>
            <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 0, md: 4 }}
            paddingX={{ base: 0, md: 16 }}
            >
                <Box
                    maxW={{ base: "100%", md: "50%" }}
                    mb={{ base: 8, md: 0 }}
                >
                    <VStack align="flex-start" spacing={0} >
                        <Heading
                            fontFamily="Markazi Text"
                            fontSize="40pt"
                            >
                                Little Lemon<br/>
                                Chicago
                        </Heading>
                        <Text>
                        Little Lemon began as a dream shared by two brothers, Adrian and Mario.
                        Growing up in the heart of Chicago, they were immersed in the rich, flavorful tapestry of Mediterranean cuisine.
                        Their grandmother's kitchen was a sanctuary of warmth and tradition, where the aromas of freshly baked pita bread,
                        sizzling kebabs, and fragrant spices filled the air. Inspired by her love for cooking and her passion for sharing
                        authentic flavors, Adrian and Mario decided to bring a taste of their heritage to the Windy City.
                        </Text>
                    </VStack>
                </Box>
                <Box 
                    position="relative"
                    width="300px" 
                    height="200px"
                >
                    <Image
                        src={chefsImg1}
                        alt="chefs"
                        borderRadius="16px"
                        objectFit="cover"
                        position="absolute"
                        top="0"
                        left="0"
                        zIndex="1"
                    />
                    <Image
                        src={chefsImg2}
                        alt="chefs"
                        borderRadius="16px"
                        objectFit="cover"
                        position="absolute"
                        top="80px"
                        left="-160px"
                        zIndex="2"
                        display={{ base: "none", md: "block" }}
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default Backstory;