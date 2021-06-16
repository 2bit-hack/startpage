import React, { useState } from "react";
import "./App.css";

import Welcome from "./components/Welcome/Welcome";
import QuickLinks from "./components/QuickLinks/QuickLinks";

function App() {
  return (
    <div className="App">
      <div className="col">
        <div className="row">
          <div className="box">
            <Welcome />
          </div>
          <div className="box">
            <QuickLinks />
          </div>
        </div>
        <div className="row">
          <div className="box" />
        </div>
      </div>
    </div>
  );
}

export default App;
