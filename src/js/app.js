import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, NotFoundPage, LoginPage, NewsPage, NewsDetails } from './pages';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage} />
            <Route path='/login' component={LoginPage}/>
            <Route path='/noticias' component={NewsPage}/>
            <Route path='/noticias/:id' component={NewsDetails}/>
            <Route path='*' component={NotFoundPage}/>
        </Route>
    </Router>,
    document.getElementById('app-container')
);