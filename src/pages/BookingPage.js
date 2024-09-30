// BookingPage.js
import BookingForm from '../components/BookingForm';
import { useReducer } from 'react';

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return state.filter((time) => time !== action.payload);
        default:
            return state;
    }
};

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const BookingPage = () => {
    const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, [], initializeTimes);

    return (
        <section id="reservations-section">
            <h1>Reservations </h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
        </section>
    );
};
export default BookingPage;