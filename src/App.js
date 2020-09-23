import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";
import Registration from "./Registration";
import AuthProvider from "./AuthContext";
import { pageNames } from "./constants";

export const AuthContext = React.createContext();

function App() {
  const [page, setPage] = useState(pageNames.REGISTRATION);

  const onPageChange = (pageName) => {
    setPage(pageName);
  };

  const isLoginPages =
    page === pageNames.LOGIN || page === pageNames.REGISTRATION;

  return (
    <AuthProvider changePage={setPage}>
      <div className="app" data-testid="app">
        {!isLoginPages && <Header onPageChange={onPageChange} />}
        {
          {
            [pageNames.LOGIN]: <Login onPageChange={onPageChange} />,
            [pageNames.REGISTRATION]: (
              <Registration onPageChange={onPageChange} />
            ),
            [pageNames.MAP]: <Map />,
            [pageNames.PROFILE]: <Profile />,
          }[page]
        }
      </div>
    </AuthProvider>
  );
}

export default App;
