import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import HomePage from 'components/HomePage';
import Heroes from 'components/Heroes';
import Items from 'components/Items';
import Creeps from 'components/Creeps';


const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/heroes" component={Heroes} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/creeps" component={Creeps} />
        </Switch>
    </Router>
);

export default routes;