import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <span>
               <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
               
               </Switch>
            </span>
         );
    }
}
 
export default Content;