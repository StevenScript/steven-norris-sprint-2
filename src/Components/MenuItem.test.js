import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import { CartProvider } from "./CartContext";

test("renders MenuItem with title and price", () => {
  render(
    <CartProvider>
      <MenuItem
        id={1}
        imgSrc="imgSrc.png"
        altText="Test Item"
        items={["Test Item 1", "Test Item 2"]}
        price="10.99"
        title="Test Item"
      />
    </CartProvider>
  );

  expect(screen.getByText("Test Item")).toBeInTheDocument();
  expect(screen.getByText("$10.99")).toBeInTheDocument();
  expect(screen.getByAltText("Test Item")).toBeInTheDocument();
});
