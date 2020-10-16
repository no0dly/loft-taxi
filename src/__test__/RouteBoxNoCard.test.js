import React from "react";
import RouteBoxNoCard from "../components/Map/RouteBox/RouteBoxNoCard";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("RouteBoxNoCard component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <RouteBoxNoCard />
      </BrowserRouter>
    );

    expect(getByTestId("route-box-no-card")).toBeInTheDocument();
  });
});
