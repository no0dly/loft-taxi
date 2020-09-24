import React from "react";
import Registration from "../Registration";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Registration component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );

    expect(getByTestId("registration")).toBeInTheDocument();
  });
});
