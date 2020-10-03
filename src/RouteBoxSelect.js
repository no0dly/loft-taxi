import React from "react";

import { TextField, Button } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./RouteBox.css";
import { string } from "prop-types";

const proopTypes = {
  // loginRequest: func.isRequired,
  // resetLoginStatus: func.isRequired,
  from: string.isRequired,
  where: string.isRequired,
};

function RouteBoxSelect({ from, where }) {
  const defaultProps = {
    options: [],
    getOptionLabel: (option) => option.title,
  };

  const placeOrder = () => {
    console.log("place an order");
  };

  const onChange = () => {
    console.log("field change");
  };
  return (
    <form className="form" onSubmit={placeOrder}>
      <div className="form__field">
        <Autocomplete
          {...defaultProps}
          id="debug"
          debug
          renderInput={(params) => (
            <TextField {...params} label="Откуда" margin="normal" fullWidth />
          )}
          onChange={onChange}
        />
      </div>
      <div className="form__field">
        <Autocomplete
          {...defaultProps}
          id="debug"
          debug
          renderInput={(params) => (
            <TextField {...params} label="Куда" margin="normal" fullWidth />
          )}
          onChange={onChange}
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
export default RouteBoxSelect;
