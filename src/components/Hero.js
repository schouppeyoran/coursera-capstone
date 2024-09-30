import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Text, Button, VStack, Heading } from "@chakra-ui/react";
import HeroImage from './assets/hero.jpg';

const Hero = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      bg="#495E57"
      p={8}
      gap={{ base: 0, md: 48 }}
      paddingX={{ base: 4, md: 32 }}
      as="section"
      id='hero-section'
    >
      <Box
        color="white"
        maxW={{ base: "100%", md: "400px" }}
        mb={{ base: 8, md: 0 }}
      >
        <VStack align="flex-start" spacing={4}>
            <VStack align="flex-start" spacing={0}>
                <Heading
                    fontFamily="Markazi Text"
                    color="#F4CE14"
                    fontSize="54pt"
                    >
                        Little Lemon
                </Heading>
                <Heading
                    fontFamily="Markazi Text"
                    color="white"
                    fontSize="40pt"
                >Chicago</Heading>
                <Text color="white">
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </Text>
            </VStack>
            <Link to="/reservations">
                <Button
                    bg="#F4CE14"
                    color="black"
                    rounded={16}
                    _hover={{ bg: "#E1BD13" }}
                    fontFamily="Karla"
                >
                Reserve a Table
                </Button>
            </Link>
            </VStack>
      </Box>
      <Box
        maxW={{ base: "100%", md: "50%" }}
        mt={{ base: 8, md: 0 }}
      >
        <Image
          src={HeroImage}
          alt="Restaurant food"
          borderRadius="16px"
          objectFit="cover"
          maxH="300px"
          w="100%"
        />
      </Box>
    </Flex>
  );
};

export default Hero;