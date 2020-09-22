import React from "react";
import App from "../App";

import { render } from "@testing-library/react";

describe("App component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app")).toBeInTheDocument();
  });

  it("Should render initial page", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("registration")).toBeInTheDocument();
  });

  it("Should not render header on initial page", () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId(/header/i)).toBeNull();
  });
});
