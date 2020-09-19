import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Registration from "./Registration";

export const AuthContext = React.createContext();

function App() {
  const [page, setPage] = useState("REGISTRATION");
  const [isLoggedIn, setAuth] = useState(false);

  const onPageChange = (pageName) => {
    setPage(pageName);
  };

  const login = (email, password) => {
    console.log("Login is process", email, password);
    setAuth(true);
    console.log("Login is done");
    setPage("MAP");
  };

  const logout = () => {
    console.log("Logout is process");
    setAuth(false);
    console.log("Logout is done");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      <div className="app">
        {page !== "LOGIN" && page !== "REGISTRATION" && (
          <Header onPageChange={onPageChange} />
        )}
        {
          {
            LOGIN: <Login onPageChange={onPageChange} />,
            REGISTRATION: <Registration onPageChange={onPageChange} />,
            MAP: <Map />,
            PROFILE: <Profile />,
          }[page]
        }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
