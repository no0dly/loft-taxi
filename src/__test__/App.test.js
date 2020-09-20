import React from "react";
import App from "../App";
import { render } from "@testing-library/react";

describe("App component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
