import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  console.log("hahahah");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happeasdfasdfn!</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
