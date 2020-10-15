import React from "react";
import { Provider } from "react-redux";
import { Registration } from "../pages/Registration/Registration";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";

const mockStore = store;
describe("Registration component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Registration
            registrationRequest={jest.fn()}
            resetLoginStatus={jest.fn()}
            isLoaded={false}
            error={false}
          />
        </BrowserRouter>
      </Provider>
    );

    expect(getByTestId("registration")).toBeInTheDocument();
  });
});
