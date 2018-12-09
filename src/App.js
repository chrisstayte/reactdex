import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import SearchBar from './components/search/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
