import React from "react";
import "./App.css";

import Welcome from "./components/Welcome/Welcome";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import News from "./components/News/News";

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
          <div className="box box-news">
            <News />
          </div>
          <div className="box box-kanji" />
        </div>
      </div>
    </div>
  );
}

export default App;
