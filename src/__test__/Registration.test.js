import React from "react";
import Registration from "../Registration";
import { render } from "@testing-library/react";

describe("Registration component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<Registration />);

    expect(getByTestId("registration")).toBeInTheDocument();
  });
});
