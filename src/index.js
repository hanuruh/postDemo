import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import HomePage from "./pages/HomePage";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/sass/styles.scss'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HomePage />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
