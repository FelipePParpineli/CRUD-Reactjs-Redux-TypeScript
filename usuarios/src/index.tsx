import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUser from './App'
import store from './store/index';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppUser />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
