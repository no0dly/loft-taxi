import React from "react";
import { RouteBoxSelect } from "../RouteBoxSelect";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("RouteBoxSelect component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <RouteBoxSelect
          from="a"
          to="b"
          routeFieldChange={jest.fn()}
          fetchAddressListRequest={jest.fn()}
          getRouteRequest={jest.fn()}
          addressList={[]}
        />
      </BrowserRouter>
    );

    expect(getByTestId("route-box-select")).toBeInTheDocument();
  });
});
