// Homepage.js
import Card from "../components/Card";
import { Box } from "@chakra-ui/react";

const specials = [
    {
      title: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../components/assets/greek-salad.jpg"),
    },
    {
        title: "Bruchetta",
        description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../components/assets/bruchetta.jpg"),
    },
    {
    title: "Lemon dessert",
    description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../components/assets/lemon-dessert.jpg"),
    },
  ];

const Homepage = () => {
    return (
        <>
            <h2>Hero section</h2>
            <br/>
            <section>
                <h2>This week's specials!</h2>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(3,minmax(0,1fr))"
                    gridGap={8}
                >
                    {specials.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                    />
                    ))}
                </Box>
            </section>
            <br/>
            <h2>Testimonials section</h2>
            <br/>
            <h2>Our story section</h2>
            <br/>
        </>
    );
};
export default Homepage;