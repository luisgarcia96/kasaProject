import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages import
import Home from '../pages/home';
import About from '../pages/about/index.jsx';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
