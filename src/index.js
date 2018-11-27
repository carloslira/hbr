import React from 'react';
import ReactDOM from 'react-dom';

import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import {
    ThemeProvider
} from 'react-jss';

import indexRoutes from './routes/index';

import theme from './styles/theme';

import './assets/css/normalize.css?v=8.0.0';

ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key} />;
                })}
            </Switch>
        </ThemeProvider>
    </HashRouter>,
    document.getElementById('root')
);
