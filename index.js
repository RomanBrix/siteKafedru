import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/main/App';
import css from './css/scss/main.scss';

const init = document.getElementById('mountNode');
// const init = document.getElementsByTagName('body')[0];
render(<MuiThemeProvider><App/></MuiThemeProvider>, init);
