import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Simple test to ensure the BookingForm component renders correctly
describe("BookingForm component", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  test("Renders Choose date label", () => {
    render(<BookingForm availableTimes={availableTimes} />);
    const dateLabel = screen.getByText("Choose date");
    expect(dateLabel).toBeInTheDocument();
  })
});
