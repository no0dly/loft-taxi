import reducer from "../taxiRoute";
import {
  routeFieldChange,
  fetchAddressListRequest,
  fetchAddressListSuccess,
  getRouteRequest,
  getRouteSuccess,
  changeRouteBoxView,
} from "../../actions";

describe("taxiRoute reducer", () => {
  const initialData = {
    from: "",
    to: "",
    addressList: [],
    taxiRoute: [],
    routeBoxView: "",
  };
  describe("from", () => {
    const value = "123";
    it("Should set this field to payload value if routeFieldChange action was run and if payload name is from", () => {
      const res = reducer(initialData, {
        type: routeFieldChange.toString(),
        payload: { name: "from", value },
      });

      expect(res.from).toBe(value);
      expect(res.to).toBe(initialData.to);
    });
  });
  describe("to", () => {
    const value = "123";
    it("Should set this field to payload value if routeFieldChange action was run and if payload name is to", () => {
      const res = reducer(initialData, {
        type: routeFieldChange.toString(),
        payload: { name: "to", value },
      });

      expect(res.to).toBe(value);
      expect(res.from).toBe(initialData.from);
    });
  });
  describe("addressList", () => {
    it("Should set this field to [] value if fetchAddressListRequest action was run ", () => {
      const res = reducer(
        { ...initialData, addressList: [1, 2, 3] },
        {
          type: fetchAddressListRequest.toString(),
        }
      );

      expect(res.addressList).toEqual([]);
    });
    it("Should set this field to payload value if fetchAddressListSuccess action was run ", () => {
      const value = [1, 2, 3];
      const res = reducer(initialData, {
        type: fetchAddressListSuccess.toString(),
        payload: value,
      });

      expect(res.addressList).toEqual(value);
    });
  });
  describe("taxiRoute", () => {
    it("Should set this field to [] value if getRouteRequest action was run ", () => {
      const res = reducer(
        { ...initialData, taxiRoute: [1, 2, 3] },
        {
          type: getRouteRequest.toString(),
        }
      );

      expect(res.taxiRoute).toEqual([]);
    });
    it("Should set this field to payload value if getRouteSuccess action was run ", () => {
      const value = [1, 2, 3];
      const res = reducer(initialData, {
        type: getRouteSuccess.toString(),
        payload: value,
      });

      expect(res.taxiRoute).toEqual(value);
    });
  });
  describe("routeBoxView", () => {
    const value = "123";
    it("Should set this field to payload value if changeRouteBoxView action was run", () => {
      const res = reducer(initialData, {
        type: changeRouteBoxView.toString(),
        payload: value,
      });

      expect(res.routeBoxView).toBe(value);
    });
  });
});
