import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Nav from './Nav';
import Index from './Index';
import Greased from './Greased';
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Router>
          <div>
            < Header />
            < Nav />
            <Route exact path="/" render={ (renderProps) => < Index hogs={hogs} /> } />
            <Route exact path="/greased" render={ (renderProps) => < Greased hogs={hogs} /> } />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;


// show the hog's details upon a user's click

// BONUS: allow users to hide hogs (not delete them, just hide them from view!)

// BONUS: bring in pig gifs from an API

// BONUS: implement Semantic Cards for each hog

// Project requirements: