import reducer from "../reducers/saveCard";
import { saveCardRequest, saveCardSuccess, saveCardFailure } from "../actions";

describe("saveCard reducer", () => {
  const initialData = {
    isLoading: false,
    isLoaded: false,
    error: false,
  };
  describe("isLoading", () => {
    it("Should set isLoading to true if saveCardRequest action was run", () => {
      const res = reducer(initialData, { type: saveCardRequest.toString() });

      expect(res.isLoading).toBe(true);
    });
    it("Should set isLoading to false if saveCardSuccess action was run", () => {
      const res = reducer(
        { ...initialData, isLoading: true },
        {
          type: saveCardSuccess.toString(),
          payload: "test",
        }
      );

      expect(res.isLoading).toBe(false);
    });
    it("Should set isLoading to false if saveCardFailure action was run", () => {
      const res = reducer(
        { ...initialData, isLoading: true },
        { type: saveCardFailure.toString() }
      );

      expect(res.isLoading).toBe(false);
    });
  });

  describe("isLoaded", () => {
    it("Should set isLoaded to false if saveCardRequest action was run", () => {
      const res = reducer(
        { ...initialData, isLoaded: true },
        { type: saveCardRequest.toString() }
      );

      expect(res.isLoaded).toBe(false);
    });
    it("Should set isLoaded to true if saveCardSuccess action was run", () => {
      const res = reducer(initialData, {
        type: saveCardSuccess.toString(),
        payload: "test",
      });

      expect(res.isLoaded).toBe(true);
    });
    it("Should set isLoaded to true if saveCardFailure action was run", () => {
      const res = reducer(initialData, { type: saveCardFailure.toString() });

      expect(res.isLoaded).toBe(true);
    });
  });

  describe("error", () => {
    it("Should set error to false if saveCardRequest action was run", () => {
      const res = reducer(
        { ...initialData, error: true },
        { type: saveCardRequest.toString() }
      );

      expect(res.error).toBe(false);
    });
    it("Should set error to false if saveCardSuccess action was run", () => {
      const res = reducer(initialData, {
        type: saveCardSuccess.toString(),
        payload: "test",
      });

      expect(res.error).toBe(false);
    });
    it("Should set error to true if saveCardFailure action was run", () => {
      const res = reducer(initialData, { type: saveCardFailure.toString() });

      expect(res.error).toBe(true);
    });
  });
});
