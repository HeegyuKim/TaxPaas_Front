import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import TaxOrganizer from './components/taxorg/TaxOrganizer'
import OCRLayout from './components/taxorg/OCRLayout'
import ClientProfile from './components/client/ClientProfile'

import './stylesheets/Base.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/cpa/client/:clientId/ocr" component={OCRLayout} />
          <Route exact path='/cpa/client/:clientId/taxorg' component={TaxOrganizer} />
          <Route exact path='/cpa/client/:clientId' component={ClientProfile}/>
          <Route exact path='/cpa' component={Dashboard}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
