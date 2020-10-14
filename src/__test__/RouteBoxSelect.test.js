import React from "react";
import { RouteBox } from "../components/Map/RouteBox/RouteBox";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { boxView } from "../utils/constants";

describe("RouteBox component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <RouteBox routeBoxView={boxView.NO_CARD} />
      </BrowserRouter>
    );

    expect(getByTestId("route-box")).toBeInTheDocument();
  });
});
