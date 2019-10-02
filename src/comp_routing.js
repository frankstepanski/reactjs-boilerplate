import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import templates here
import HelloWorld from './templates/helloWorld';

/* 
    This function works as the layout of the entire web-app.
    Add routes heres. 
    Note: add react-redux.
*/
function CompRouting(){
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HelloWorld} />
            </Switch>
        </Router>
      );
}

export default CompRouting;