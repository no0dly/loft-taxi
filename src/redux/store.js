import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import authMiddleware from "../redux/middleware/authMiddleware";
import saveCardMiddleware from "../redux/middleware/saveCardMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, saveCardMiddleware),
});

export default store;
