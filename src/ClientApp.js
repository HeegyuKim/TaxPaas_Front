import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/Base.css'
import './taxpayer/TaxPayer.css'


import TaxPayerHeader from './taxpayer/header/Header'
import TaxPayerNavigator from './taxpayer/nav/TaxPayerNavigator'
import MainContent from './taxpayer/main/MainContent'


class ClientApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="TaxPayer">
          <TaxPayerHeader />
          <div className="TaxPayerContent">
            <TaxPayerNavigator />
            <Route exact path='/client' component={MainContent}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default ClientApp;
