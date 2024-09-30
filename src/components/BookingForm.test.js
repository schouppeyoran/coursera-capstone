import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const submitForm = jest.fn();
  const updateTimes = jest.fn();

  const renderComponent = () => render(
    <BookingForm
      availableTimes={availableTimes}
      submitForm={submitForm}
      updateTimes={updateTimes}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the BookingForm component', () => {
    renderComponent();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  it('initially disables the submit button', () => {
    renderComponent();
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  it('enables the submit button when all fields are valid', async () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    // Set valid date (today's date)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: formattedDate } });

    // Set valid time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    // Set valid number of guests
    fireEvent.change(guestsInput, { target: { value: '4' } });

    // Set valid occasion
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  it('keeps the submit button disabled when any field is invalid', async () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    // Set valid date (today's date)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: formattedDate } });

    // Set valid time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    // Set invalid number of guests
    fireEvent.change(guestsInput, { target: { value: '0' } });

    // Set valid occasion
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });

  it('calls submitForm with correct data when form is submitted', async () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole('button', { name: /Make Your reservation/i });

    // Set valid date (today's date)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    fireEvent.change(dateInput, { target: { value: formattedDate } });

    // Set valid time
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    // Set valid number of guests
    fireEvent.change(guestsInput, { target: { value: '4' } });

    // Set valid occasion
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitForm).toHaveBeenCalledWith({
        date: formattedDate,
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      });
    });
  });

  it('calls updateTimes when date is changed', () => {
    renderComponent();
    const dateInput = screen.getByLabelText(/Choose date/i);
    
    const newDate = '2023-06-15'; // Use a fixed date for consistent testing
    fireEvent.change(dateInput, { target: { value: newDate } });

    expect(updateTimes).toHaveBeenCalledWith(new Date(newDate));
  });
});
