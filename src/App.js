import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Registration from "./Registration";
import AuthProvider from "./AuthContext";

export const AuthContext = React.createContext();

function App() {
  const [page, setPage] = useState("REGISTRATION");

  const onPageChange = (pageName) => {
    setPage(pageName);
  };

  const isLoginPages = page === "LOGIN" || page === "REGISTRATION";

  return (
    <AuthProvider changePage={setPage}>
      <div className="app" data-testid="app">
        {!isLoginPages && <Header onPageChange={onPageChange} />}
        {
          {
            LOGIN: <Login onPageChange={onPageChange} />,
            REGISTRATION: <Registration onPageChange={onPageChange} />,
            MAP: <Map />,
            PROFILE: <Profile />,
          }[page]
        }
      </div>
    </AuthProvider>
  );
}

export default App;
