import React from "react";
import Login from "../Login";
import { render } from "@testing-library/react";

describe("Login component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<Login />);

    expect(getByTestId("login")).toBeInTheDocument();
  });
});
