import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders logan rainford text", () => {
  render(<App />);
  const titleElement = screen.getByText(/Logan Rainford/i);
  expect(titleElement).toBeInTheDocument();
});
