import reducer from "../reducers/auth";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  resetLoginStatus,
} from "../actions";

describe("Auth reducer", () => {
  const initialData = {
    isLoggedIn: false,
    isLoading: false,
    isLoaded: false,
    error: false,
    token: null,
  };
  describe("isLoggedIn", () => {
    it("Should set isLoggedIn to false if loginRequest action was run", () => {
      const res = reducer(
        { ...initialData, isLoggedIn: true },
        { type: loginRequest.toString() }
      );

      expect(res.isLoggedIn).toBe(false);
    });
    it("Should set isLoggedIn to true if loginSuccess action was run", () => {
      const res = reducer(initialData, {
        type: loginSuccess.toString(),
        payload: "test",
      });

      expect(res.isLoggedIn).toBe(true);
    });
    it("Should set isLoggedIn to false if loginFailure action was run", () => {
      const res = reducer(
        { ...initialData, isLoggedIn: true },
        { type: loginFailure.toString() }
      );

      expect(res.isLoggedIn).toBe(false);
    });
    it("Should set isLoggedIn to false if logout action was run", () => {
      const res = reducer(
        { ...initialData, isLoggedIn: true },
        { type: logout.toString() }
      );

      expect(res.isLoggedIn).toBe(false);
    });
  });

  describe("token", () => {
    it("Should set token to null if loginRequest action was run", () => {
      const res = reducer(
        { ...initialData, token: "123" },
        { type: loginRequest.toString() }
      );

      expect(res.token).toBe(null);
    });
    it("Should set token to payload value if loginSuccess action was run", () => {
      const res = reducer(initialData, {
        type: loginSuccess.toString(),
        payload: "test",
      });

      expect(res.token).toBe("test");
    });
    it("Should set token to null if logout action was run", () => {
      const res = reducer(
        { ...initialData, token: "test" },
        { type: logout.toString() }
      );

      expect(res.token).toBe(null);
    });
  });

  describe("isLoading", () => {
    it("Should set isLoading to true if loginRequest action was run", () => {
      const res = reducer(initialData, { type: loginRequest.toString() });

      expect(res.isLoading).toBe(true);
    });
    it("Should set isLoading to false if loginSuccess action was run", () => {
      const res = reducer(
        { ...initialData, isLoading: true },
        {
          type: loginSuccess.toString(),
          payload: "test",
        }
      );

      expect(res.isLoading).toBe(false);
    });
    it("Should set isLoading to false if loginFailure action was run", () => {
      const res = reducer(
        { ...initialData, isLoading: true },
        { type: loginFailure.toString() }
      );

      expect(res.isLoading).toBe(false);
    });

    it("Should set isLoading to false if resetLoginStatus action was run", () => {
      const res = reducer(
        { ...initialData, isLoading: true },
        {
          type: resetLoginStatus.toString(),
        }
      );

      expect(res.isLoading).toBe(false);
    });
  });

  describe("isLoaded", () => {
    it("Should set isLoaded to false if loginRequest action was run", () => {
      const res = reducer(
        { ...initialData, isLoaded: true },
        { type: loginRequest.toString() }
      );

      expect(res.isLoaded).toBe(false);
    });
    it("Should set isLoaded to true if loginSuccess action was run", () => {
      const res = reducer(initialData, {
        type: loginSuccess.toString(),
        payload: "test",
      });

      expect(res.isLoaded).toBe(true);
    });
    it("Should set isLoaded to true if loginFailure action was run", () => {
      const res = reducer(initialData, { type: loginFailure.toString() });

      expect(res.isLoaded).toBe(true);
    });

    it("Should set isLoaded to false if resetLoginStatus action was run", () => {
      const res = reducer(
        { ...initialData, isLoaded: true },
        {
          type: resetLoginStatus.toString(),
        }
      );

      expect(res.isLoaded).toBe(false);
    });
  });

  describe("error", () => {
    it("Should set error to false if loginRequest action was run", () => {
      const res = reducer(
        { ...initialData, error: true },
        { type: loginRequest.toString() }
      );

      expect(res.error).toBe(false);
    });
    it("Should set error to false if loginSuccess action was run", () => {
      const res = reducer(initialData, {
        type: loginSuccess.toString(),
        payload: "test",
      });

      expect(res.error).toBe(false);
    });
    it("Should set error to true if loginFailure action was run", () => {
      const res = reducer(initialData, { type: loginFailure.toString() });

      expect(res.error).toBe(true);
    });

    it("Should set error to false if resetLoginStatus action was run", () => {
      const res = reducer(
        { ...initialData, error: true },
        {
          type: resetLoginStatus.toString(),
        }
      );

      expect(res.error).toBe(false);
    });
  });
});
