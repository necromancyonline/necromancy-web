import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, applyMiddleware } from 'redux';

// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// -> IMPORT MODULARIZED REDUCERS <- \\
import rootReducer from './redux/reducers/_root.reducer';

// Create one store that all components can use
const storeInstance = createStore(
  rootReducer, // <-- USE OF MODULARIZED REDUCERS
  // Add sagaMiddleware to our store
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
