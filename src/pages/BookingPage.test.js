import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './BookingPage';

describe('BookingPage', () => {
  test('initializeTimes returns the correct initial available times', () => {
    // Arrange
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    // Act
    const { getByText } = render(<BookingPage />);

    // Assert
    expectedTimes.forEach(time => {
      expect(getByText(time)).toBeInTheDocument();
    });
  });
});
