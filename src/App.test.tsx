import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import mockSearch from "./mocks/mock_search.json";

jest.mock("./http");
const http = require("./http");

describe("My app", () => {
  it("should render a text input", () => {
    render(<App />);
    const input = screen.getByLabelText(/Rechercher un produit/i);
    expect(input).toBeInTheDocument();
  });

  it("should render a message when no search has been typed", () => {
    render(<App />);
    const input = screen.getByText(
      /Vous pouvez rechercher un produit ci-dessous 🙂/i
    );
    expect(input).toBeInTheDocument();
  });

  it("should render images when typing IPA in the input", async () => {
    // given
    http.fetchSearch.mockResolvedValue(mockSearch);
    render(<App />);
    const input = screen.getByLabelText(/Rechercher un produit/i);

    // when
    fireEvent.change(input, { target: { value: "IPA" } });

    // then
    const brewdog = await screen.findByAltText("Punk IPA");
    await waitFor(() => expect(brewdog).toBeInTheDocument());
  });
});
