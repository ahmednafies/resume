import React, { Component } from 'react';
import AboutMe from './Pages/AboutMe'
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import Impact from './Pages/Impact';
import Books from './Pages/Books';
import Skills from './Pages/Skills';
import {Route} from "react-router-dom"

class Routes extends Component{

    render(){
        return(
            <switch>
                <Route exact path="/" component={AboutMe} />          
                <Route path="/about" component={AboutMe}/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/impact" component={Impact}/>
                <Route path="/books" component={Books}/>
            </switch>
        );
    }
}

export default Routes