import React from "react";
import "./App.css";
import Header from "./Header";
import View from "./View";
import AuthProvider from "./AuthContext";
import { useLocation } from "react-router-dom";
import { pageUrls } from "./constants";

function App() {
  const { pathname } = useLocation();

  const isLoginPages =
    pathname === pageUrls.LOGIN || pathname === pageUrls.HOME;

  return (
    <AuthProvider>
      <div className="app" data-testid="app">
        {!isLoginPages && <Header />}
        <View />
      </div>
    </AuthProvider>
  );
}

export default App;
