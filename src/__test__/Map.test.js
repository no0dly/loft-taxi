import React from "react";
import Map from "../Map";
import { render } from "@testing-library/react";

describe("Map component", () => {
  window.URL.createObjectURL = function () {};
  it("Should be rendered", () => {
    const { getByTestId } = render(<Map />);

    expect(getByTestId("map")).toBeInTheDocument();
  });
});
