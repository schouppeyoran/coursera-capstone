// BookingForm.js
import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';

const formStyle = {
    display: 'grid',
    maxWidth: '200px',
    gap: '10px',
  };

const getFormattedDate = (monthsToAdd = 0) => {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsToAdd);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const setCustomValidity = (inputElement, message) => {
  inputElement.setCustomValidity(message);
  inputElement.reportValidity();
};

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    // Date validation
    const selectedDate = new Date(date);
    const minDate = new Date(getFormattedDate());
    const maxDate = new Date(getFormattedDate(6));
    selectedDate.setHours(0, 0, 0, 0);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setHours(0, 0, 0, 0);
    const dateValid = date && selectedDate >= minDate && selectedDate <= maxDate;

    // Time validation
    const timeValid = time !== '' && availableTimes.includes(time);

    // Guests validation
    const guestsNumber = parseInt(guests, 10);
    const guestsValid = !isNaN(guestsNumber) && guestsNumber >= 1 && guestsNumber <= 10;

    // Occasion validation
    const occasionValid = occasion !== '' && ['Birthday', 'Anniversary'].includes(occasion);

    setIsFormValid(dateValid && timeValid && guestsValid && occasionValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const inputElement = e.target;

    if (newDate < getFormattedDate() || newDate > getFormattedDate(3)) {
      setCustomValidity(inputElement, "Please select a date between today and 3 months from now.");
    } else {
      setCustomValidity(inputElement, "");
    }

    setDate(newDate);
    updateTimes(new Date(newDate));
    checkFormValidity();
  };

  const handleGuestsChange = (e) => {
    const newGuests = parseInt(e.target.value);
    const inputElement = e.target;

    if (newGuests < 1 || newGuests > 10) {
      setCustomValidity(inputElement, "Please enter a number between 1 and 10.");
    } else {
      setCustomValidity(inputElement, "");
    }

    setGuests(newGuests);
    checkFormValidity();
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    const inputElement = e.target;

    if (newOccasion === "") {
      setCustomValidity(inputElement, "Please select an occasion.");
    } else {
      setCustomValidity(inputElement, "");
    }

    setOccasion(newOccasion);
    checkFormValidity();
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    const inputElement = e.target;

    if (newTime === "") {
      setCustomValidity(inputElement, "Please select a time.");
    } else {
      setCustomValidity(inputElement, "");
    }

    setTime(newTime);
    checkFormValidity();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests: parseInt(guests, 10), occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={getFormattedDate()}
        max={getFormattedDate(4)}
        required
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        required
        aria-required="true"
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={handleGuestsChange}
        required
        aria-required="true"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
        aria-required="true"
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <Button
        type="submit"
        bg="#F4CE14"
        color="black"
        rounded={16}
        _hover={{ bg: "#E1BD13" }}
        fontFamily="Karla"
        isDisabled={!isFormValid}
        airia-label="Submit"
      >
        Make Your reservation
      </Button>
    </form>
  );
};

export default BookingForm;


// const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [guests, setGuests] = useState(1);
//   const [occasion, setOccasion] = useState('');
//   const [isFormValid, setIsFormValid] = useState(false);

//   const isDateValid = () => date !== '';
//   const isTimeValid = () => time !== '';
//   const isNumberOfGuestsValid = () => guests !== '';
//   const isOccasionValid = () => occasion !== '';

//   const checkFormValidity = () => {
//       setIsFormValid(isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isOccasionValid());
//     };
  
//   const handleDateChange = (e) => {
//     const newDate = e.target.value;
//     const inputElement = e.target;

//     if (newDate < getFormattedDate() || newDate > getFormattedDate(3)) {
//       setCustomValidity(inputElement, "Please select a date between today and 3 months from now.");
//     } else {
//       setCustomValidity(inputElement, "");
//     }

//     setDate(newDate);
//     updateTimes(new Date(newDate));
//     checkFormValidity();
//   };

//   const handleGuestsChange = (e) => {
//     const newGuests = parseInt(e.target.value);
//     const inputElement = e.target;

//     if (newGuests < 1 || newGuests > 10) {
//       setCustomValidity(inputElement, "Please enter a number between 1 and 10.");
//     } else {
//       setCustomValidity(inputElement, "");
//     }

//     setGuests(newGuests);
//     checkFormValidity();
//   };

  // const handleOccasionChange = (e) => {
  //   const newOccasion = e.target.value;
  //   const inputElement = e.target;

  //   if (newOccasion === "") {
  //     setCustomValidity(inputElement, "Please select an occasion.");
  //   } else {
  //     setCustomValidity(inputElement, "");
  //   }

  //   setOccasion(newOccasion);
  //   checkFormValidity();
  // };

//   const handleTimeChange = (e) => {
//     setTime(e.target.value);
//     checkFormValidity();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       const formData = { date, time, guests, occasion };
//       submitForm(formData);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <label htmlFor="res-date">Choose date</label>
//       <input
//         type="date"
//         id="res-date"
//         value={date}
//         onChange={handleDateChange}
//         min={getFormattedDate()}
//         max={getFormattedDate(3)}
//         required
//       />

//       <label htmlFor="res-time">Choose time</label>
//       <select
//         id="res-time"
//         value={time}
//         onChange={handleTimeChange}
//         required
//       >
//         <option value="">Select a time</option>
//         {availableTimes.map((time) => (
//           <option key={time}>{time}</option>
//         ))}
//       </select>

//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         id="guests"
//         min="1"
//         max="10"
//         value={guests}
//         onChange={handleGuestsChange}
//         required
//       />

//       <label htmlFor="occasion">Occasion</label>
//       <select
//         id="occasion"
//         value={occasion}
//         onChange={handleOccasionChange}
//         required
//       >
//         <option value="">Select an occasion</option>
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>

//       <Button
//         type="submit"
//         bg="#F4CE14"
//         color="black"
//         rounded={16}
//         _hover={{ bg: "#E1BD13" }}
//         fontFamily="Karla"
//         isDisabled={!isFormValid}
//       >
//         Make Your reservation
//       </Button>
//     </form>
//   );
// };

// export default BookingForm;
