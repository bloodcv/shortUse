import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from "react-router-dom";
import Router from './router'
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const AppOrg: FC = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="App">
        <Router />
      </div>
    </HashRouter>
  </Provider>
);

const App = process.env.NODE_ENV === 'development' ? hot(AppOrg) : AppOrg

export default App;