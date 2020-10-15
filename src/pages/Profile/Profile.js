import React from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import { MCIcon } from "loft-taxi-mui-theme";
import { func, shape, string } from "prop-types";
import "./Profile.css";
import * as actions from "../../redux/actions";
import cardDetailsSelector from "../../selectors/cardDetails";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const proopTypes = {
  saveCardRequest: func.isRequired,
  profileFieldChange: func.isRequired,
  cardDetails: shape({
    cardNumber: string.isRequired,
    expiryDate: string.isRequired,
    cardName: string.isRequired,
    cvc: string.isRequired,
  }),
};

export function Profile({ saveCardRequest, profileFieldChange, cardDetails }) {
  const { control, handleSubmit, errors } = useForm();

  const onChange = (e) => {
    profileFieldChange({
      name: e.target ? e.target.name : "expiryDate",
      value: e.target ? e.target.value : e.toString(),
    });
  };

  const submit = (e) => {
    e.preventDefault();

    saveCardRequest();
  };
  const { cardNumber, expiryDate, cardName, cvc } = cardDetails;
  console.log(errors);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
            <form onSubmit={handleSubmit(submit)}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container spacing={4} justify="center">
                    <Grid item xs={6}>
                      <Paper elevation={4} className="profile-form__block">
                        <div className="icon">
                          <MCIcon />
                        </div>
                        <div className="form__field">
                          <Controller
                            id="cardNumber"
                            name="cardNumber"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={cardNumber}
                            render={(props) => {
                              return (
                                <TextField
                                  id="cardNumber"
                                  label="Номер карты"
                                  type="cardNumber"
                                  fullWidth
                                  placeholder="0000 0000 0000 0000"
                                  name="cardNumber"
                                  value={cardNumber}
                                  onChange={(e) => {
                                    props.onChange(e.target.value);
                                    onChange(e);
                                  }}
                                  error={!!errors.cardNumber}
                                  helperText={
                                    errors.cardNumber && "Не должно быть пустым"
                                  }
                                />
                              );
                            }}
                          />
                        </div>
                        <div className="form__field">
                          <Controller
                            name="expiryDate"
                            control={control}
                            rules={{ required: true }}
                            render={(props) => (
                              <DatePicker
                                value={expiryDate}
                                onChange={(data) => {
                                  props.onChange(data);
                                  onChange(data);
                                }}
                                label=" "
                                minDate={new Date()}
                                placeholder="07/22"
                                openTo="year"
                                views={["year", "month"]}
                                format="MM/yy"
                                fullWidth
                                error={!!errors.expiryDate}
                                helperText={
                                  errors.expiryDate && "Не должно быть пустым"
                                }
                              />
                            )}
                          />
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper elevation={4} className="profile-form__block">
                        <div className="form__field">
                          <Controller
                            name="cardName"
                            control={control}
                            rules={{ required: true }}
                            render={(props) => (
                              <TextField
                                label="Имя владельца"
                                type="cardName"
                                fullWidth
                                name="cardName"
                                placeholder="USER NAME"
                                value={cardName}
                                onChange={(e) => {
                                  props.onChange(e.target.value);
                                  onChange(e);
                                }}
                                error={!!errors.cardName}
                                helperText={
                                  errors.cardName && "Не должно быть пустым"
                                }
                              />
                            )}
                          />
                        </div>
                        <div className="form__field">
                          <Controller
                            name="cvc"
                            control={control}
                            rules={{ required: true }}
                            render={(props) => (
                              <TextField
                                label="CVC *"
                                type="cvc"
                                fullWidth
                                name="cvc"
                                value={cvc}
                                onChange={(e) => {
                                  props.onChange(e.target.value);
                                  onChange(e);
                                }}
                                error={!!errors.cvc}
                                helperText={
                                  errors.cardName && "Не должно быть пустым"
                                }
                              />
                            )}
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
    </MuiPickersUtilsProvider>
  );
}

Profile.proopTypes = proopTypes;
export default connect(cardDetailsSelector, actions)(Profile);
