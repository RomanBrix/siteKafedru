import React from 'react';
import { render } from 'react-dom';
import App from './components/admin/App';
import './css/scss/admin.scss';
import "./css/admin/css/fontello.css"
const init = document.getElementById('mountNode');
render(<App/>, init);
