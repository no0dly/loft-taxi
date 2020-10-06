import { recordSaga } from "./recordSaga";
import { routeSaga } from "../routeSaga";
import { getRouteRequest, getRouteSuccess } from "../../actions";

jest.mock("../../../api", () => ({
  getRoute: jest.fn(() => ({
    data: {},
  })),
}));

describe("routeSaga", () => {
  it("getRouteRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(routeSaga, getRouteRequest());
    expect(dispatched).toEqual([
      {
        type: getRouteSuccess.toString(),
        payload: {},
      },
    ]);
  });
});
