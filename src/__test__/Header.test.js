import React from "react";
import Header from "../Header";
import { render } from "@testing-library/react";

describe("Header component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header")).toBeInTheDocument();
  });
});
