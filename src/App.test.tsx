import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO mock fetch, add more test
it("should render a text input", () => {
  render(<App />);
  const input = screen.getByLabelText(/Rechercher un produit/i);
  expect(input).toBeInTheDocument();
});
