import React from 'react';
import ReactDOM from 'react-dom';
import {GiftListApp} from "./components/GiftListApp/GiftListApp.layout";
import {Provider} from "react-redux";
import {store} from "./store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GiftListApp/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
