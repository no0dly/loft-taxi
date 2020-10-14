import { recordSaga } from "./recordSaga";
import { addressListSaga } from "../addressListSaga";
import {
  fetchAddressListRequest,
  fetchAddressListSuccess,
} from "../../actions";

jest.mock("../../../api", () => ({
  fetchAddressList: jest.fn(() => ({
    data: { addresses: {} },
  })),
}));

describe("addressListSaga", () => {
  it("fetchAddressListRequest trigger proper actions", async () => {
    const dispatched = await recordSaga(
      addressListSaga,
      fetchAddressListRequest()
    );
    expect(dispatched).toEqual([
      {
        type: fetchAddressListSuccess.toString(),
        payload: {},
      },
    ]);
  });
});
