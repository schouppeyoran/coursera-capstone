import { SimpleGrid } from "@chakra-ui/react";
import SpecialsCard from "./SpecialsCard";
import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const specials = [
    {
      title: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../components/assets/greek-salad-card.jpg"),
      price: "12.99",
    },
    {
        title: "Bruchetta",
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../components/assets/bruchetta-card.jpg"),
        price: "7.99",
    },
    {
    title: "Lemon dessert",
    description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../components/assets/lemon-dessert-card.jpg"),
    price: "8.99",
    },
  ];

const Specials = () => {
    return (
        <>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
            width="100%"
            mb={4}
            gap={4}
          >
            <h2>This week's specials!</h2>
            <Link to="/menu">
              <Button
                      bg="#F4CE14"
                      color="black"
                      rounded={16}
                      _hover={{ bg: "#E1BD13" }}
                      fontFamily="Karla"
                  >
                    Online menu
              </Button>
            </Link>
          </Flex>
            <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            padding="1rem"
            >
            {specials.map((project) => (
                <SpecialsCard
                key={project.title}
                title={project.title}
                description={project.description}
                price={project.price}
                imageSrc={project.getImageSrc()}
                />
            ))}
            </SimpleGrid>
    </>
    );
};

export default Specials;