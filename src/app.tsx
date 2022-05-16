import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './auth';
import { GlobalStyles } from './components/global-styles';
import { Routes } from './components/routes';
import { store } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('react-root'));
