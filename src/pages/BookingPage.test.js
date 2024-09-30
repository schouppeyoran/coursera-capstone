// BookingPage.test.js
import React from 'react';
import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './BookingPage';
import * as api from '../utils/api';  // Import the api moduleimport React from 'react';

// Mock the entire api module
jest.mock('../utils/api');

describe('BookingPage', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks();
  });

  test('initializes with available times', () => {
    // Mock the fetchAPI to return a fixed set of times
    api.fetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00']);

    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Check if the time options are rendered
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBeGreaterThan(0);
  });

  test('initializes with correct structure of available times', () => {
    // Mock fetchAPI to return a random set of times
    api.fetchAPI.mockImplementation(() => {
      const times = [];
      for (let i = 17; i <= 23; i++) {
        if (Math.random() < 0.5) times.push(`${i}:00`);
        if (Math.random() < 0.5) times.push(`${i}:30`);
      }
      return times;
    });

    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Get the specific select element for time
    const timeSelect = screen.getByLabelText(/Choose time/i);

  //   // Get all options within this specific select element
  //   const timeOptions = within(timeSelect).getAllByRole('option');

  //   // Check that we have at least one time option
  //   expect(timeOptions.length).toBeGreaterThan(0);

  //   // Check that all times are in the correct format
  //   timeOptions.forEach(option => {
  //     expect(option.textContent).toMatch(/^(17|18|19|20|21|22|23):(00|30)$/);
  //   });
  // });

    // Check that all times are in the correct format
    const timeOptions = Array.from(screen.getByLabelText(/Choose time/i).options);
    timeOptions.slice(1).forEach(option => {
      expect(option.textContent).toMatch(/^(17|18|19|20|21|22|23):(00|30)$/);
    });
  });


  test('updates times when date changes', () => {
    // Initial mock implementation
    api.fetchAPI.mockImplementation(() => ['17:00', '18:00']);

    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Get the date input and time select elements
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);

    // Check initial times
    let timeOptions = within(timeSelect).getAllByRole('option');
    expect(timeOptions.length).toBe(3);
    expect(timeOptions[1].textContent).toBe('17:00');
    expect(timeOptions[2].textContent).toBe('18:00');

    // Change the mock implementation for a different date
    api.fetchAPI.mockImplementation(() => ['19:00', '20:00', '21:00']);

    // Simulate changing the date
    fireEvent.change(dateInput, { target: { value: '2023-06-15' } });

    // Check updated times
    timeOptions = within(timeSelect).getAllByRole('option');
    expect(timeOptions.length).toBe(4);
    expect(timeOptions[1].textContent).toBe('19:00');
    expect(timeOptions[2].textContent).toBe('20:00');
    expect(timeOptions[3].textContent).toBe('21:00');
  });
});
