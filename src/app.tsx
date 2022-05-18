import React from "react";
import { Provider } from "react-redux";
import { GlobalStyles } from "./components/global-styles";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { Routes } from "./components/routes";
import { AuthProvider } from "./auth";
import { store } from "./store/store";

export const App: React.FC = () => {
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
