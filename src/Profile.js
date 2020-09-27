import React, { useState } from "react";
import { connect } from "react-redux";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import { MCIcon } from "loft-taxi-mui-theme";
import { func } from "prop-types";
import "./Profile.css";
import * as actions from "./redux/actions";

const proopTypes = {
  saveCardRequest: func.isRequired,
};

export function Profile({ saveCardRequest }) {
  const [formFields, setFields] = useState({
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
  });

  const onChange = (e) => {
    setFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    saveCardRequest(formFields);
  };

  return (
    <div className="profile" data-testid="profile">
      <div className="profile__container">
        <Paper className="profile__window">
          <div className="profile-title">
            <div className="profile-title__header">
              <Typography variant="h4">Профиль</Typography>
            </div>
            <div className="profile-title__subtext">
              <Typography variant="body1">Способ оплаты</Typography>
            </div>
          </div>
          <form onSubmit={submit}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={4} justify="center">
                  <Grid item xs={6}>
                    <Paper elevation={4} className="profile-form__block">
                      <div className="icon">
                        <MCIcon />
                      </div>
                      <div className="form__field">
                        <TextField
                          id="cardNumber"
                          label="Номер карты *"
                          type="cardNumber"
                          fullWidth
                          placeholder="0000 0000 0000 0000"
                          name="cardNumber"
                          value={formFields.cardNumber}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form__field">
                        <TextField
                          id="expiryDate"
                          type="expiryDate"
                          label=" "
                          fullWidth
                          placeholder="00 / 00"
                          name="expiryDate"
                          value={formFields.expiryDate}
                          onChange={onChange}
                        />
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={4} className="profile-form__block">
                      <div className="form__field">
                        <TextField
                          id="cardName"
                          label="Имя владельца"
                          type="cardName"
                          fullWidth
                          name="cardName"
                          placeholder="USER NAME"
                          value={formFields.cardName}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form__field">
                        <TextField
                          id="cvc"
                          label="CVC *"
                          type="cvc"
                          fullWidth
                          name="cvc"
                          value={formFields.cvc}
                          onChange={onChange}
                        />
                      </div>
                    </Paper>
                  </Grid>
                  <div>
                    <Button type="submit" variant="contained" color="primary">
                      Сохранить
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
}

Profile.proopTypes = proopTypes;
export default connect(null, actions)(Profile);
