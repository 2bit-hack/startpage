import React, { useState } from "react";
import "./App.css";

import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <div className="col">
        <div className="row">
          <div className="box">
            <Welcome />
          </div>
          <div className="box" />
        </div>
        <div className="row">
          <div className="box" />
        </div>
      </div>
    </div>
  );
}

export default App;
