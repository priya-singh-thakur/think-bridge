import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

class Router extends  React.Component {
    render(){
        return(
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route path="/abc" component={SecondPage} />
             </Switch>
         </BrowserRouter>

    )
}
}

export default Router