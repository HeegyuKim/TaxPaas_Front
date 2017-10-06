import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import TaxOrganizer from './components/taxorg/TaxOrganizer'
import OCRLayout from './components/taxorg/OCRLayout'
import ClientProfile from './components/client/ClientProfile'

import './App.css';
import './stylesheets/Base.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Dashboard} />
          <Route path='/taxorg' component={TaxOrganizer} />
          <Route path='/client/:clientId' component={ClientProfile}/>
          <Route path="/ocr/:clientId" component={OCRLayout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
