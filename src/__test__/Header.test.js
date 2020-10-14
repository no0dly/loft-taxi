import React from "react";
import { Header } from "../components/Common/Header/Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(getByTestId("header")).toBeInTheDocument();
  });
});
