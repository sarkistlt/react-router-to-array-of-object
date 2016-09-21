Small package to return array of object, each object with following structure:
~~~js
{name: 'route name', path: 'route path'}
~~~

### Install
~~~sh
npm i --save react-router-to-array-of-object
~~~

### Usage
~~~js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import routesToArray from 'react-router-to-array-of-object';
// or var reactRouterToArray = require('react-router-to-array');

const appRoutes = (
    <Route path="/admin" name={admin} getComponents={require('./admin').default}>
        <IndexRoute name="Login" name={Login} getComponents={require('./Login').default}/>
        <Route path="dashboard" name={Dashboard} getComponents={require('./Dashboard').default}/>
        <Route path="dashboard/quiz-report" name={QuizReport} getComponents={require('./Dashboard/QuizReport').default}/>
        <Route path="products" name={Products} getComponents={require('./Products').default}/>
    </Route>
);

console.log(reactRouterToArray(appRoutes));
/**
output: 
[
    {name:'admin' path: '/admin'},
    {name:'Dashboard' path: '/dashboard'},
    {name:'QuizReport' path: '/dashboard/quiz-report'},
    {name:'Products' path: '/products'},
]
*/
~~~