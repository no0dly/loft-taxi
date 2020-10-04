import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";
import { pageUrls } from "./constants";

function RouteBoxNoCard() {
  return (
    <>
      <div className="title">
        <div className="title__header">
          <Typography variant="h4">Заполните платежные данные</Typography>
        </div>
      </div>
      <div className="route-box__content">
        <Typography variant="body1">
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </Typography>
      </div>
      <div className="actions">
        <Button
          to={pageUrls.PROFILE}
          component={Link}
          data-testid="goto-profile"
          variant="contained"
          color="primary"
        >
          Перейти в профиль
        </Button>
      </div>
    </>
  );
}
export default RouteBoxNoCard;
