import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import './styles/index.css'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);