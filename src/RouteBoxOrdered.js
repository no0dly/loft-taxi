import React from "react";
import { connect } from "react-redux";
import { func } from "prop-types";

import { Typography, Button } from "@material-ui/core";

import { boxView } from "./constants";

import Selector from "./selectors/RouteBox";
import * as actions from "./redux/actions";

import "./RouteBox.css";

const proopTypes = {
  changeRouteBoxView: func.isRequired,
};

function RouteBoxNoCard({ changeRouteBoxView }) {
  const newOrder = () => {
    changeRouteBoxView(boxView.ROUTE_SELECT);
  };
  return (
    <>
      <div className="title">
        <div className="title__header">
          <Typography variant="h4">Заказ размещён</Typography>
        </div>
      </div>
      <div className="route-box__content">
        <Typography variant="body1">
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </Typography>
      </div>
      <div className="actions">
        <Button variant="contained" color="primary" onClick={newOrder}>
          Сделать новый заказ
        </Button>
      </div>
    </>
  );
}

RouteBoxNoCard.proopTypes = proopTypes;
export default connect(Selector, actions)(RouteBoxNoCard);
