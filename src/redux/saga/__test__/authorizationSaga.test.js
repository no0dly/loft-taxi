import { recordSaga } from "./recordSaga";
import { loginRequestSaga } from "../authorizationSaga";
import { loginRequest, loginSuccess, getCardRequest } from "../../actions";

jest.mock("../../../api", () => ({
  login: jest.fn(() => ({
    data: { success: true, token: 123 },
  })),
}));

describe("loginRequestSaga", () => {
  it("loginRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(loginRequestSaga, loginRequest({}));
    expect(dispatched).toEqual([
      {
        type: loginSuccess.toString(),
        payload: 123,
      },
      {
        type: getCardRequest.toString(),
        payload: 123,
      },
    ]);
  });
});
