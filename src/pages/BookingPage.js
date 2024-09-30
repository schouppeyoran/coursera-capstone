// BookingPage.js
import React, { useReducer, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/api';
import BookingForm from '../components/BookingForm';
import { Box } from '@chakra-ui/react';

// This function will initialize the available times
const initializeTimes = () => {
  // You can call fetchAPI with today's date to get initial times
  return fetchAPI(new Date());
};

// Reducer function to manage availableTimes state
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  const updateTimes = useCallback((selectedDate) => {
    const times = fetchAPI(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  }, []);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      console.error('Booking submission failed');
      // Handle unsuccessful submission (e.g., show error message)
    }
  };

  return (
    <Box
      as='section'
      id='booking-form'
      padding={4}
    >
      <h2>Book a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm}
      />
    </Box>
  );
};

export default BookingPage;
