import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {createStore,combineReducers,applyMiddleware} from "redux";
import {processAction} from "./redux/reducers";
import thunkMiddleware from "redux-thunk";


const store = createStore(combineReducers({processAction}),applyMiddleware(thunkMiddleware));
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
