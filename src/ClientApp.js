import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/Base2.css'


import Header from './taxpayer/header/Header'
import HorizonNav from './taxpayer/nav/HorizonNav'
import ClientSideNav from './taxpayer/nav/ClientSideNav'
import ClientDashboard from './taxpayer/dashboard/ClientDashboard'
import ClientMyPage from './taxpayer/mypage/ClientMyPage'
import ClientTaxOrg from './taxpayer/taxorg/ClientTaxOrg'
import ClientSourceDashboard from './taxpayer/source/ClientSourceDashboard'
import ClientReviewDashboard from './taxpayer/review/ClientReviewDashboard'
import ClientPayAndEfileDashboard from './taxpayer/pay_and_efile/ClientPayAndEfileDashboard'
import ClientCommunicationDashboard from './taxpayer/communication/ClientCommunicationDashboard'
import ClientCalendar from './taxpayer/calendar/ClientCalendar'


class ClientApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="MainContainer">
          <Header />
          <div className="MainBody">
            <ClientSideNav />
            <div className="RightBody">
              <HorizonNav />

              <Switch>
                <Route exact path="/client" component={ClientDashboard}/>
                <Route exact path="/client/mypage/:clientId" component={ClientMyPage}/>
                <Route exact path="/client/taxorg/:clientId" component={ClientTaxOrg} />
              </Switch>
              <Switch>
                <Route exact path="/client/source/:clientId" component={ClientSourceDashboard} />
              </Switch>
              <Switch>
                <Route exact path="/client/review/:clientId" component={ClientReviewDashboard} />
              </Switch>
              <Switch>
                <Route exact path="/client/pay_and_efile/:clientId" component={ClientPayAndEfileDashboard} />
              </Switch>
              <Switch>
                <Route exact path="/client/communication/:clientId" component={ClientCommunicationDashboard} />
              </Switch>
              <Route exact path="/client/calendar" component={ClientCalendar} />

            </div>{/*End of RightBody*/}
          </div>{/*End of MainBody*/}
        </div>{/*End of MainContainer*/}
      </BrowserRouter>
    );
  }
}

export default ClientApp;


// page location highlight
// var pageLocationHighlight = function(){
$(function(){
  if(document.location.pathname === "/client"){
    $(".HeaderMenu ul li:eq(0) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Home");
    $(".SearchNav").hide();
  };
  if(document.location.pathname === "/client/mypage"){
    $(".HeaderMenu ul li:eq(1)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("My Page");
  };
  if(document.location.pathname === "/client/taxorg"){
    $(".HeaderMenu ul li:eq(1)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Tax Organizer");
  };
  if(document.location.pathname === "/client/source"){
    $(".HeaderMenu ul li:eq(2)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Source Docs");
    $(".SearchNav").css("height", "0");
  };
  if(document.location.pathname === "/client/review"){
    $(".HeaderMenu ul li:eq(3)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Tax Review");
  };
  if(document.location.pathname === "/client/pay_and_efile"){
    $(".HeaderMenu ul li:eq(4)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Pay & E-file");
  };
  if(document.location.pathname === "/client/communication"){
    $(".HeaderMenu ul li:eq(5) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Communication");
  };
  if(document.location.pathname === "/client/calendar"){
    $(".HeaderMenu ul li:eq(7) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Calendar");
  };
});
