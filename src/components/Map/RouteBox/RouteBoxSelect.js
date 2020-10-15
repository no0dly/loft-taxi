import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./RouteBox.css";
import { string, func, shape } from "prop-types";
import * as actions from "../../../redux/actions";
import Selector from "../../../selectors/RouteBox";

const proopTypes = {
  from: string.isRequired,
  to: string.isRequired,
  routeFieldChange: func.isRequired,
  fetchAddressListRequest: func.isRequired,
  getRouteRequest: func.isRequired,
  routeFieldReset: func.isRequired,
  addressList: shape([]),
};

export function RouteBoxSelect({
  from,
  to,
  routeFieldChange,
  fetchAddressListRequest,
  getRouteRequest,
  addressList,
  routeFieldReset,
}) {
  const { control, handleSubmit, errors } = useForm();
  const getDefaultProps = (valueToFilter) => ({
    options: addressList.filter((item) => item !== valueToFilter),
    getOptionLabel: (option) => option,
  });

  const placeOrder = (e) => {
    getRouteRequest();
  };

  const setFrom = (e, newValue) => {
    routeFieldChange({
      name: "from",
      value: newValue || "",
    });
  };
  const setTo = (e, newValue) => {
    routeFieldChange({
      name: "to",
      value: newValue || "",
    });
  };

  useEffect(() => {
    fetchAddressListRequest();
  }, [fetchAddressListRequest]);

  useEffect(() => {
    return () => {
      routeFieldReset();
    };
  }, [routeFieldReset]);

  return (
    <form
      className="form"
      onSubmit={handleSubmit(placeOrder)}
      data-testid="route-box-select"
    >
      <div className="form__field">
        <Controller
          name="from"
          control={control}
          rules={{ required: true }}
          render={(props) => (
            <Autocomplete
              {...getDefaultProps(to)}
              onChange={(e, newValue) => {
                props.onChange(e.target.value);
                setFrom(e, newValue);
              }}
              data-name="from"
              value={from}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Откуда"
                  margin="normal"
                  fullWidth
                  error={!!errors.from}
                />
              )}
            />
          )}
        />
      </div>
      <div className="form__field">
        <Controller
          name="to"
          control={control}
          rules={{ required: true }}
          render={(props) => (
            <Autocomplete
              {...getDefaultProps(from)}
              onChange={(e, newValue) => {
                props.onChange(e.target.value);
                setTo(e, newValue);
              }}
              value={to}
              name="to"
              id="to"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Куда"
                  margin="normal"
                  fullWidth
                  error={!!errors.to}
                />
              )}
            />
          )}
        />
      </div>
      <div className="actions">
        <Button type="submit" variant="contained" color="primary">
          Вызвать такси
        </Button>
      </div>
    </form>
  );
}

RouteBoxSelect.proopTypes = proopTypes;
export default connect(Selector, actions)(RouteBoxSelect);
