import React from "react";
import Header from "../Header";
import { render, fireEvent } from "@testing-library/react";

describe("Header component", () => {
  it("Should be rendered", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header")).toBeInTheDocument();
  });

  it("Should be trigger onPageChange on button click with proper param", () => {
    const onPageChange = jest.fn();
    const { getAllByTestId } = render(<Header onPageChange={onPageChange} />);
    const buttons = getAllByTestId("nav-button");
    fireEvent.click(buttons[0]);
    expect(onPageChange).toHaveBeenCalledWith("MAP");
    fireEvent.click(buttons[1]);
    expect(onPageChange).toHaveBeenCalledWith("PROFILE");
    fireEvent.click(buttons[2]);
    expect(onPageChange).toHaveBeenCalledWith("REGISTRATION");
  });
});
