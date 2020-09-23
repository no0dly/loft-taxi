import React, { useState } from "react";
import { func, node } from "prop-types";
import { pageNames } from "./constants";

export const AuthContext = React.createContext();

const propTypes = {
  children: node.isRequired,
  changePage: func.isRequired,
};

function AuthProvider({ children, changePage }) {
  const [isLoggedIn, setAuth] = useState(false);

  const login = (email, password) => {
    setAuth(true);
    changePage(pageNames.MAP);
  };

  const logout = () => {
    setAuth(false);
    changePage(pageNames.LOGIN);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = propTypes;
export default AuthProvider;
