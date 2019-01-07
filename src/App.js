import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import { Provider } from './store';
import { Router } from '@reach/router';
import Navbar from './components/navbar';
import Home from './views/home';
import Upload from './views/upload';
import Edit from './views/edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Navbar />
          <Router className="App-router">
            <Home path="/" />
            <Upload path="/upload" />
            <Edit path="/edit" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
