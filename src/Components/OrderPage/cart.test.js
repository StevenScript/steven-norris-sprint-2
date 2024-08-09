import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { CartProvider } from "../Menus/Common/CartContext";

test("renders Cart with items and total", () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );

  expect(screen.getByText("Total: $0.00")).toBeInTheDocument(); // Assuming cart starts empty
});
