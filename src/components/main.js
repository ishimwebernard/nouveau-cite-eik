import React from 'react';
import Index from './index';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
import WhoWeAre from './whoweare';

export default function Main() {
    return (
        <Switch>
            
              
                <Route exact path="/whoweare" component={WhoWeAre}/>
                  <Route exact path="/" component={Index}/ >
           
        </Switch>
    )
}
