import React from "react";
import { connect } from "react-redux";

import RouteBoxNoCard from "./RouteBoxNoCard";
import RouteBoxSelect from "./RouteBoxSelect";
import RouteBoxOrdered from "./RouteBoxOrdered";

import { boxView } from "../../../utils/constants";
import { Paper } from "@material-ui/core";
import "./RouteBox.css";
import { string } from "prop-types";

import Selector from "../../../selectors/RouteBox";
import * as actions from "../../../redux/actions";

const proopTypes = {
  routeBoxView: string.isRequired,
};

export function RouteBox({ routeBoxView }) {
  return (
    <div className="route-box" data-testid="route-box">
      <Paper className="route-box__container">
        {
          {
            [boxView.NO_CARD]: <RouteBoxNoCard />,
            [boxView.ROUTE_SELECT]: <RouteBoxSelect />,
            [boxView.ORDERED]: <RouteBoxOrdered />,
          }[routeBoxView]
        }
      </Paper>
    </div>
  );
}

RouteBox.proopTypes = proopTypes;
export default connect(Selector, actions)(RouteBox);
