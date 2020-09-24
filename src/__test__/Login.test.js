import React from "react";
import Login from "../Login";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(getByTestId("login")).toBeInTheDocument();
  });
});
