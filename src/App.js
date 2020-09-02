import React, { useState } from "react";

import "./index.css";

function App() {
  let currtime = new Date().toLocaleTimeString();

  let [ctime, stime] = useState(currtime);

  function uptime() {
    currtime = new Date().toLocaleTimeString();

    stime(currtime);
  }

  setInterval(uptime, 1000);

  return (
    <>
      <div className="head-style">
        <h1>{ctime}</h1>
      </div>
    </>
  );
}

export default App;
