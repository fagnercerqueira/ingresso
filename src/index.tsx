import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { App, Notfound, Movie, Search }from './containers';


const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/search/:keyword" component={Search} />
            <Route component={Notfound} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
