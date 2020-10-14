import { combineReducers } from "redux";
import auth from "./auth";
import cardStatus from "./cardStatus";
import cardDetails from "./cardDetails";
import taxiRoute from "./taxiRoute";

export default combineReducers({ auth, cardStatus, cardDetails, taxiRoute });
