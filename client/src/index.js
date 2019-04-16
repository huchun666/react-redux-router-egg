import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import globalAppJs from "./assets/js/app";
globalAppJs.appendEmByWidth();

const store = createStore(
    rootReducers, 
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
