import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages import


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} /> */}
            </Switch>
        </Router>
    );
};

export default AppRouter;