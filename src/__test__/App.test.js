import React from "react";
import App from "../App";

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
