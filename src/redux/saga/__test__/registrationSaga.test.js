import { recordSaga } from "./recordSaga";
import { registrationRequestSaga } from "../registrationSaga";
import { registrationRequest, registrationSuccess } from "../../actions";

jest.mock("../../../api", () => ({
  registration: jest.fn(() => ({
    data: { success: true, token: 123 },
  })),
}));

describe("registrationRequestSaga", () => {
  it("registrationRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(
      registrationRequestSaga,
      registrationRequest({})
    );
    expect(dispatched).toEqual([
      {
        type: registrationSuccess.toString(),
        payload: 123,
      },
    ]);
  });
});
