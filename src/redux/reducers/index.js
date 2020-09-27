import { combineReducers } from "redux";
import auth from "./auth";
import saveCard from "./saveCard";

export default combineReducers({ auth, saveCard });
