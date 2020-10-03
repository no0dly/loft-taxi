import React from "react";

import { boxView } from "./constants";
import { Paper } from "@material-ui/core";
import RouteBoxNoCard from "./RouteBoxNoCard";
import RouteBoxSelect from "./RouteBoxSelect";
import RouteBoxOrdered from "./RouteBoxOrdered";
import "./RouteBox.css";

function RouteBox() {
  const view = boxView.ROUTE_SELECT;
  return (
    <div className="route-box" data-testid="route-box">
      <Paper className="route-box__container">
        {
          {
            [boxView.NO_CARD]: <RouteBoxNoCard />,
            [boxView.ROUTE_SELECT]: <RouteBoxSelect />,
            [boxView.ORDERED]: <RouteBoxOrdered />,
          }[view]
        }
      </Paper>
    </div>
  );
}
export default RouteBox;
