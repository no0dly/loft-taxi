import React from "react";
import { Provider } from "react-redux";
import { App } from "../App";

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import store from "../redux/store";

describe("App component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App loginSuccess={jest.fn()} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
