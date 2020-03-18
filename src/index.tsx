import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { GlobalStyle } from './styled';
import * as serviceWorker from './serviceWorker';
import { App, Notfound, Movie } from './containers';
import { MainProvider } from './Providers/MainProvider/';

const routing = (
    <MainProvider>
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/movie/:slug" component={Movie}  render={({match}) => { return match.params.slug }} />
                    }/>
                    <Route component={Notfound} />
                </Switch>
            </Router>
        <GlobalStyle />
        </Suspense>
    </MainProvider >
    
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
