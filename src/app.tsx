import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./auth";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { GlobalStyles } from "./components/global-styles";
import { Routes } from "./components/routes";
import { store } from "./store/store";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Provider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById("react-root"));
