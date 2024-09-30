import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} />);
    }

    // Add half star if needed
    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfStroke} />);
    }

    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={faStarEmpty} />);
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
};

export default Rating;
