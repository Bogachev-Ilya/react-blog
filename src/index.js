import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

const Home = () => {
    return <h1>Home</h1>
}

const About = () => {
    return <h1>About app</h1>
}

ReactDOM.render(
    <BrowserRouter>
      <div>
        
    <Navbar />
    <Route exact path="/" component ={Welcome}/>
    <Route path="/home" component ={Home}/>
    <Route path="/about" component ={About}/>
    </div>
    </BrowserRouter>,    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
