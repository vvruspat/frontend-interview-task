import React, { Component, ErrorInfo, ReactNode } from "react";
import { Error } from "../kit";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.log("Error: ", error);

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Error size="large" center={true}>
          Unknown error
        </Error>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
