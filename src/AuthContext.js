import React, { useState } from "react";
import { func, node } from "prop-types";

export const AuthContext = React.createContext();

const propTypes = {
  children: node.isRequired,
  changePage: func.isRequired,
};

function AuthProvider({ children, changePage }) {
  const [isLoggedIn, setAuth] = useState(false);

  const login = (email, password) => {
    console.log("Login is process", email, password);
    setAuth(true);
    console.log("Login is done");
    changePage("MAP");
  };

  const logout = () => {
    console.log("Logout is process");
    setAuth(false);
    console.log("Logout is done");
    changePage("LOGIN");
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
