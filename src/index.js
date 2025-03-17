import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/storeConfiguration";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("✅ index component is rendering!");
root.render(
        <Provider store={store}>
            <BrowserRouter basename="/">
                <App/>
            </BrowserRouter>
        </Provider>
);

