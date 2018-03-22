import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'

import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Car} data={data}/>
            
            <Route path="/users/:id" component={CarDetail} data={data}/>
            
        </Route>
    </Router>,
    document.getElementById('container')
);
