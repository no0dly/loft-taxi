import { recordSaga } from "./recordSaga";
import { saveCardRequestSaga, getCardRequestSaga } from "../paymentSaga";
import {
  saveCardRequest,
  saveCardSuccess,
  changeRouteBoxView,
  getCardRequest,
  getCardSuccess,
} from "../../actions";

import { boxView } from "../../../constants";

jest.mock("../../../api", () => ({
  saveCard: jest.fn(() => ({
    data: { success: true, token: 123 },
  })),
  getCard: jest.fn(() => ({
    data: {},
  })),
}));

describe("saveCardRequestSaga", () => {
  it("saveCardRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(
      saveCardRequestSaga,
      saveCardRequest({})
    );
    expect(dispatched).toEqual([
      {
        type: saveCardSuccess.toString(),
        payload: 123,
      },
      {
        type: changeRouteBoxView.toString(),
        payload: boxView.ROUTE_SELECT,
      },
    ]);
  });
});
describe("getCardRequestSaga", () => {
  it("getCardRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(getCardRequestSaga, getCardRequest({}));
    expect(dispatched).toEqual([
      {
        type: getCardSuccess.toString(),
        payload: {},
      },
      {
        type: changeRouteBoxView.toString(),
        payload: boxView.ROUTE_SELECT,
      },
    ]);
  });
});
