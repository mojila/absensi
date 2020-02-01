import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import App from './components/app';
import { Switch, Route, HashRouter } from 'react-router-dom';

function Router() {
    return <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </HashRouter>
}

ReactDOM.render(
    <Router />,
    document.getElementById('root')
    );