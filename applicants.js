import React from 'react';
import { render } from 'react-dom';
import App from './components/applicants/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import css1 from './css/scss/main.scss';
import css from './css/scss/applicants.scss';

const init = document.getElementById('mountNode');
render(<MuiThemeProvider><App/></MuiThemeProvider>, init);
