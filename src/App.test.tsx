import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import mockSearch from "./mocks/mock_search.json";
import mockProduct from "./mocks/mock_product.json";

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

  it("should render a product page when clicking on a product image", async () => {
    // given
    http.fetchSearch.mockResolvedValue(mockSearch);
    http.fetchProduct.mockResolvedValue(mockProduct);
    render(<App />);
    const input = screen.getByLabelText(/Rechercher un produit/i);
    fireEvent.change(input, { target: { value: "IPA" } });
    const brewdog = await screen.findByAltText("Punk IPA");
    await waitFor(() => expect(brewdog).toBeInTheDocument());

    // when
    fireEvent.click(brewdog);

    // then
    const title = await screen.findByText("Punk IPA");
    expect(title).toBeInTheDocument();
  });
});
