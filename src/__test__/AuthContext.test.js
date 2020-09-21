import React from "react";
// import  from "../Profile";
import AuthProvider, { AuthContext } from "../AuthContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("AuthContext", () => {
  describe("Login", () => {
    it("Sets isLoggedIn to true", () => {
      let isLoggedIn;
      let login;

      render(
        <AuthProvider changePage={() => {}}>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);

      act(() => {
        login("test@test.com", "123");
      });
      expect(isLoggedIn).toBe(true);
    });
  });
  describe("Logout", () => {
    it("Sets isLoggedIn to true", () => {
      let isLoggedIn;
      let logout;
      let login;

      render(
        <AuthProvider changePage={() => {}}>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logout = value.logout;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);

      act(() => {
        login("test@test.com", "123");
      });
      expect(isLoggedIn).toBe(true);

      act(() => {
        logout();
      });
      expect(isLoggedIn).toBe(false);
    });
  });
});
