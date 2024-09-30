import { useState } from 'react'

const occasions = [
    "Birthday",
    "Anniversary",
];

const BookingForm = ({ availableTimes, dispatchAvailableTimes }) => {
    const [time, setTime] = useState(availableTimes[0] || "");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState(occasions[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        setDate("");
        setTime(availableTimes[0] || "");
        setGuests(1);
        setOccasion(occasions[0]);
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatchAvailableTimes({ type: 'UPDATE', payload: newDate });
    };

    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            {/* <fieldset> */}
                {/* Date */}
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                {/* Time */}
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {/* Map over available times */}
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime}>{availableTime}</option>
                    ))}
                </select>
                {/* Number of guests */}
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
                {/* Occasion */}
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    {/* Map over occasions */}
                    {occasions.map((occasion) => (
                        <option key={occasion}>{occasion}</option>
                    ))}
                </select>
                {/* Submit button */}
                <button type="submit">Make Your reservation</button>
            {/* </fieldset> */}
        </form>
    );
    };

    export default BookingForm;
