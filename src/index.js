import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CookiesProvider } from 'react-cookie';


import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <CookiesProvider>
            <App/>
        </CookiesProvider>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
