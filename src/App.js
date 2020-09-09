import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";

function App() {
  const [page, setPage] = useState("LOGIN");
  const onPageChange = (e) => {
    e.preventDefault();

    setPage(e.target.name);
  };

  return (
    <div className="app">
      <Header onPageChange={onPageChange} />
      {
        {
          LOGIN: <Login onPageChange={onPageChange} />,
          MAP: <Map />,
          PROFILE: <Profile />,
        }[page]
      }
    </div>
  );
}

export default App;
