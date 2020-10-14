import reducer from "../cardDetails";
import { profileFieldChange } from "../../actions";

describe("cardStatus reducer", () => {
  const initialData = {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
  };
  describe("profileFieldChange", () => {
    const value = 123;
    it("Should set cardNumber to payload value if name is cardNumber", () => {
      const res = reducer(initialData, {
        type: profileFieldChange.toString(),
        payload: { name: "cardNumber", value },
      });

      expect(res.cardNumber).toBe(value);
      expect(res.expiryDate).toBe(initialData.expiryDate);
      expect(res.cardName).toBe(initialData.cardName);
      expect(res.cvc).toBe(initialData.cvc);
    });
    it("Should set expiryDate to payload value if name is expiryDate", () => {
      const res = reducer(initialData, {
        type: profileFieldChange.toString(),
        payload: { name: "expiryDate", value },
      });

      expect(res.cardNumber).toBe(initialData.cardNumber);
      expect(res.expiryDate).toBe(value);
      expect(res.cardName).toBe(initialData.cardName);
      expect(res.cvc).toBe(initialData.cvc);
    });
    it("Should set cardName to payload value if name is cardName", () => {
      const res = reducer(initialData, {
        type: profileFieldChange.toString(),
        payload: { name: "cardName", value },
      });

      expect(res.cardNumber).toBe(initialData.cardNumber);
      expect(res.expiryDate).toBe(initialData.expiryDate);
      expect(res.cardName).toBe(value);
      expect(res.cvc).toBe(initialData.cvc);
    });
    it("Should set cvc to payload value if name is cvc", () => {
      const res = reducer(initialData, {
        type: profileFieldChange.toString(),
        payload: { name: "cvc", value },
      });

      expect(res.cardNumber).toBe(initialData.cardNumber);
      expect(res.expiryDate).toBe(initialData.expiryDate);
      expect(res.cardName).toBe(initialData.cardName);
      expect(res.cvc).toBe(value);
    });
  });
});
