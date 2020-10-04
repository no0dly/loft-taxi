import { combineReducers } from "redux";
import auth from "./auth";
import saveCard from "./saveCard";
import cardDetails from "./cardDetails";
import taxiRoute from "./taxiRoute";

export default combineReducers({ auth, saveCard, cardDetails, taxiRoute });
