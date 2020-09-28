import { combineReducers } from "redux";
import auth from "./auth";
import saveCard from "./saveCard";
import cardDetails from "./cardDetails";

export default combineReducers({ auth, saveCard, cardDetails });
