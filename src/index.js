import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducers from './Reducers/userReducer'

let store = createStore(Reducers)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById("root"));
registerServiceWorker();
