import React, { useState } from "react";
import { node } from "prop-types";

export const AuthContext = React.createContext();

const propTypes = {
  children: node.isRequired,
};

function AuthProvider({ children }) {
  const [isLoggedIn, setAuth] = useState(false);

  const login = (email, password) => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
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
