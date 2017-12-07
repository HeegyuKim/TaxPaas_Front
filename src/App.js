import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CPAApp from './CPAApp'
import ClientApp from './ClientApp'
import Intro from './Intro'
import './stylesheets/Base.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Intro} />
          <Route path="/cpa/" component={CPAApp} />
          <Route path="/client/" component={ClientApp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
