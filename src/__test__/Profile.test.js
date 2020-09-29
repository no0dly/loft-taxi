import React from "react";
import { Profile } from "../Profile";
import { render } from "@testing-library/react";

describe("Profile component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<Profile cardDetails={{}} />);

    expect(getByTestId("profile")).toBeInTheDocument();
  });
});
