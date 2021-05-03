import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ErrorBoundary from "./components/ErrorBoundary";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AlertProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
