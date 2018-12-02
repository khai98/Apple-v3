import React from 'react'
import { render } from 'react-dom'
import {Router } from 'react-router-dom'
import App from './pages/Detailquote.dev';
import history from './utils/history';

render((
    <Router history={history}>
        <App />
    </Router>
), document.getElementById('root'));

