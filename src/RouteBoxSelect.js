import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./RouteBox.css";
import { string, func, shape } from "prop-types";
import * as actions from "./redux/actions";
import Selector from "./selectors/RouteBox";

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
  const getDefaultProps = (valueToFilter) => ({
    options: addressList.filter((item) => item !== valueToFilter),
    getOptionLabel: (option) => option,
  });

  const placeOrder = (e) => {
    e.preventDefault();

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
    <form className="form" onSubmit={placeOrder} data-testid="route-box-select">
      <div className="form__field">
        <Autocomplete
          {...getDefaultProps(to)}
          id="from"
          onChange={setFrom}
          data-name="from"
          value={from}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Откуда"
              margin="normal"
              fullWidth
              required
            />
          )}
        />
      </div>
      <div className="form__field">
        <Autocomplete
          {...getDefaultProps(from)}
          id="debug"
          debug
          onChange={setTo}
          value={to}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Куда"
              margin="normal"
              fullWidth
              required
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
