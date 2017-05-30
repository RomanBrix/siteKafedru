import React from 'react';
import { render } from 'react-dom';
import App from './components/contacts/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import css from './css/scss/main.scss';

const init = document.getElementById('mountNode');
render(<MuiThemeProvider><App/></MuiThemeProvider>, init);
