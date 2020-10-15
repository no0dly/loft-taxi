import React from "react";
import { Provider } from "react-redux";
import { Login } from "../pages/Login/Login";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";

const mockStore = store;
describe("Login component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Login resetLoginStatus={jest.fn()} />
        </BrowserRouter>
      </Provider>
    );

    expect(getByTestId("login")).toBeInTheDocument();
  });
});
