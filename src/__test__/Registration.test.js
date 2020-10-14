import React from "react";
import { Registration } from "../pages/Registration/Registration";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Registration component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Registration
          registrationRequest={jest.fn()}
          resetLoginStatus={jest.fn()}
          isLoaded={false}
          error={false}
        />
      </BrowserRouter>
    );

    expect(getByTestId("registration")).toBeInTheDocument();
  });
});
