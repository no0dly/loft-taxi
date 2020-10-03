import React from "react";
import { Link } from "react-router-dom";

import { Typography, Paper, Button } from "@material-ui/core";
import { pageUrls } from "./constants";

import "./RouteBox.css";

function RouteBoxNoCard() {
  const newOrder = () => {
    console.log("new order");
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
export default RouteBoxNoCard;
