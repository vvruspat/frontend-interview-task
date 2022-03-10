import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./components/global-styles";
import { Routes } from "./components/routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
