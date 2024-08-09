import React from "react";
import { render, screen } from "@testing-library/react";
import SidesMenu from "./SidesMenu";

test("renders SidesMenu with an image", () => {
  render(<SidesMenu />);

  expect(screen.getByAltText("Sides")).toBeInTheDocument();
});
