import React from "react";
import { Provider } from "react-redux";
import { Map } from "../pages/Map/Map";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
const mockStore = store;
describe("Map component", () => {
  window.URL.createObjectURL = function () {};
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Map taxiRout={[]} routeBoxView="" changeRouteBoxView={jest.fn()} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByTestId("map")).toBeInTheDocument();
  });
});
