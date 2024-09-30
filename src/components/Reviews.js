// Review.js
import { SimpleGrid, Text } from '@chakra-ui/react';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        id: 1,
        name: 'Jane Smith',
        rating: 4.5,
        comment: 'This is a great restaurant! I love it.',
        getImageSrc: () => require("../components/assets/profile1.jpg"),
    },
    {
        id: 2,
        name: 'John Doe',
        rating: 5,
        comment: 'My favorite Mediterranean restaurant in Chicago.',
        getImageSrc: () => require("../components/assets/profile2.jpg"),
    },
    {
        id: 3,
        name: 'Alice Williams',
        rating: 5,
        comment: "It's like my grandma is back in the kitchen",
        getImageSrc: () => require("../components/assets/profile3.jpg"),
    },
    {
        id: 4,
        name: 'Christina Davis',
        rating: 4,
        comment: 'Pretty good, love their desserts',
        getImageSrc: () => require("../components/assets/profile5.jpg"),
    },
    // {
    //     id: 5,
    //     name: 'Bob Johnson',
    //     rating: 5,
    //     comment: 'Excellent restaurant! Highly recommended.',
    //     getImageSrc: () => require("../components/assets/profile4.jpg"),
    // }
];

const Review = () => {
    return (
        <>
            <Text as="h2" px={4} align={{base : "center", md : "left"}}>Testimonials</Text>
            <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacingX={16}
            spacingY={8}
            padding={4}
            >
            {reviews.map(review => (
                <ReviewCard
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    profileImg={review.getImageSrc()}
                    comment={review.comment} />
            ))}
            </SimpleGrid>
        </>
    )
}

export default Review;