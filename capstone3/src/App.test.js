import { render, screen } from "@testing-library/react";
import BookingForm from '../capstone3/src/components/BookingForm';


test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
})
