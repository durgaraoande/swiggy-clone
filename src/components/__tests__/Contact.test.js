import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load contact page", () => {
  render(<Contact />);
  const head = screen.getByRole('heading');
  expect(head).toBeInTheDocument();
});