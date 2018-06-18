import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './App.css';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="myContainer">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>

    );
  }
}

export default App;
