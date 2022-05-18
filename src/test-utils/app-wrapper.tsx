import React, { FC } from "react";
import { Provider } from "react-redux";
import { GlobalStyles } from "../components/global-styles";
import { AuthProvider } from "../auth";
import { store } from "../store/store";

export const AppWrapper: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};
