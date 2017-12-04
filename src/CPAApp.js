import React, { Component } from 'react';
import $ from 'jquery';
// import 'jquery-ui';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// navigation components
import HorizonNav from './components/navigation/HorizonNav'
import SideNav from './components/navigation/SideNav'
// dashboard components
import Dashboard from './components/dashboard/Dashboard'
// taxorg components
import TaxOrganizer from './components/taxorg/TaxOrganizer'
import OCRLayout from './components/taxorg/OCRLayout'
// client components
import ClientManagingDashboard from './components/client/dashboard/ClientManagingDashboard'
import ClientProfile from './components/client/ClientProfile'
// source docs components
import SourceDocsDashboard from './components/sourcedocs/SourceDocsDashboard'
import SourceDocsIndividual from './components/sourcedocs/SourceDocsIndividual'
// taxreview components
import TaxReviewDashboard from './components/taxreview/TaxReviewDashboard'
import TaxReviewIndividual from './components/taxreview/TaxReviewIndividual'
// pay and efile components
import PayAndEfileDashboard from './components/pay_and_efile/PayAndEfileDashboard'
import PayAndEfileIndividual from './components/pay_and_efile/PayAndEfileIndividual'
// communication components
import CommunicationDashboard from './components/communication/CommunicationDashboard'
import CommunicationIndividual from './components/communication/CommunicationIndividual'
// team components
import TeamDashboard from './components/team/TeamDashboard'
import TeamIndividual from './components/team/TeamIndividual'
// calendar components
import Calendar from './components/calendar/Calendar'


import './stylesheets/Base.css'


class CPAApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="MainContainer">
          <Header />
          <div className="MainBody">
            <SideNav />
            <div className="RightBody">
              <HorizonNav />
              {/*client*/}
              <Switch>
              <Route exact path="/cpa/client/:clientId/ocr" component={OCRLayout} />
              <Route exact path="/cpa/client/:clientId/taxorg" component={TaxOrganizer} />
              <Route exact path="/cpa/client/:clientId" component={ClientProfile} />
              <Route exact path="/cpa/client/" component={ClientManagingDashboard} />
              <Route exact path="/cpa" component={Dashboard} />
              </Switch>
              {/*source*/}
              <Switch>
              <Route exact path="/cpa/source/:clientId" component={SourceDocsIndividual} />
              <Route exact path="/cpa/source" component={SourceDocsDashboard} />
              </Switch>
              {/*review*/}
              <Switch>
              <Route exact path="/cpa/review/:clientId" component={TaxReviewIndividual} />
              <Route exact path="/cpa/review" component={TaxReviewDashboard} />
              </Switch>
              {/*pay and efile*/}
              <Switch>
              <Route exact path="/cpa/pay_and_efile/:clientId" component={PayAndEfileIndividual} />
              <Route exact path="/cpa/pay_and_efile" component={PayAndEfileDashboard} />
              </Switch>
              {/*communication*/}
              <Switch>
              <Route exact path="/cpa/communication/:clientId" component={CommunicationIndividual} />
              <Route exact path="/cpa/communication" component={CommunicationDashboard} />
              </Switch>
              {/*team*/}
              <Switch>
              <Route exact path="/cpa/team/:memberId" component={TeamIndividual} />
              <Route exact path="/cpa/team" component={TeamDashboard} />
              </Switch>
              {/*calendar*/}
              <Route exact path="/cpa/calendar" component={Calendar} />  
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default CPAApp;

// binding
$(function(){
  $("#sidenav_onoff_a").click(sideNavOnOff_a);
  $("#sidenav_onoff_b").click(sideNavOnOff_b);
  $("#StatisticsViewCloser").click(StatisticsViewOnOff);
  $("#StatisticsCompressOnOff").click(statisticViewCompressOnOff);
});

// SideNav Open/Close by Button on SideNav
var sideNavOnOff_a = function(){
  if ($(this).hasClass("close")){
    $(this).removeClass("close");
    $("#sidenav_onoff_b").hide();
    $(".SideNav").css({"margin-left":"0", });
    // $(".SideNav").show("slide", {direction: "right"});
  } else {
    $(this).addClass("close");
    $("#sidenav_onoff_b").show();
    // var sideNavWidth = $(".SideNav").width();
    $(".SideNav").css({"margin-left":"-" + 300 + "px", });
    // $(".SideNav").hide("slide", {direction: "left"});
  }
};

// SideNav Open/Close by Button on HorizonNav
var sideNavOnOff_b = function(){
    $(this).hide();
    $("#sidenav_onoff_a").removeClass("close");
    // $(".SideNav").css({"width":"auto", "flex-grow":"3", "min-width":"220px"});
    $(".SideNav").css({"margin-left":"0", });
    // $(".SideNav").show("slide", {direction: "right"});
};

// StatisticsView Open/Close
var StatisticsViewOnOff = function(){
  if($(this).hasClass("close")){
    $(this).removeClass("close");
    $(this).css({"transform":"rotate(0deg)", "width":"1.4rem", "height":"3rem"});
    $(".Statistic").css({"width":"6rem", "height":"6rem", "flex-direction":"column", "border-radius":"5px"});
    $(".Statistic svg").fadeIn(300);
    $(".StatisticsView").css("height", "calc(12.8rem + 1.2px)");
    $(".ClientAdd").css({"height":"6rem", "width":"6rem", "padding":"1rem"});
  } else {
    $(this).addClass("close");
    $(this).css({"transform":"rotate(180deg)", "width":"1rem", "height":"2rem"});
    $(".Statistic").css({"width":"11%", "height":"3.2rem", "flex-direction":"row", "border-radius":"0"});
    $(".Statistic svg").fadeOut(300);
    $(".StatisticsView").css("height", "3.2rem");
    $(".ClientAdd").css({"height":"2.6rem", "width":"2.6rem", "padding":"0.4rem"});
  }
}

// StatisticsView compress on/off
var statisticViewCompressOnOff = function(){
  if($(this).hasClass("close")){
    $(this).removeClass("close");
    $(this).find("svg").css("transform", "rotate(90deg)");
    $(".StatisticsView").css("height","0");
  } else {
    $(this).addClass("close");
    $(this).find("svg").css("transform", "rotate(-90deg)");
    $(".StatisticsView").css("height","3.2rem");
  }
}

// SideNav Close at Other pages
// var sideNavCloseAtFirst = function(){
$(function(){
  if(document.location.pathname !== "/cpa"){
    $("#sidenav_onoff_a").addClass("close");
    $("#sidenav_onoff_b").show();
    // var sideNavWidth = $(".SideNav").width();
    $(".SideNav").css({"margin-left":"-" + 300 + "px", });
    $("#StatisticsViewCloser").addClass("close");
    $("#StatisticsViewCloser").css({"transform":"rotate(180deg)", "width":"1rem", "height":"2rem"});
    $(".Statistic").css({"width":"11%", "height":"3.2rem", "flex-direction":"row", "border-radius":"0"});
    $(".Statistic svg").fadeOut(300);
    $(".StatisticsView").css("height", "0");
    $(".ClientAdd").css({"height":"2.6rem", "width":"2.6rem", "padding":"0.4rem"});
  };
});

// page location highlight
// var pageLocationHighlight = function(){
$(function(){
  if(document.location.pathname === "/cpa"){
    $(".HeaderMenu ul li:eq(0) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Home");
    $(".SearchNav").hide();
  };
  if(document.location.pathname === "/cpa/client"){
    $(".HeaderMenu ul li:eq(1)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Client List");
  };
  if(document.location.pathname === "/cpa/client/trump"){
    $(".HeaderMenu ul li:eq(1)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Client Detail");
  };
  if(document.location.pathname === "/cpa/source"){
    $(".HeaderMenu ul li:eq(2)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Source Docs");
  };
  if(document.location.pathname === "/cpa/review"){
    $(".HeaderMenu ul li:eq(3)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Tax Review List");
  };
  if(document.location.pathname === "/cpa/pay_and_efile"){
    $(".HeaderMenu ul li:eq(4)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Pay & E-file");
  };
  if(document.location.pathname === "/cpa/communication"){
    $(".HeaderMenu ul li:eq(5) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Communication");
  };
  if(document.location.pathname === "/cpa/team"){
    $(".HeaderMenu ul li:eq(6)").css("color", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Team");
  };
  if(document.location.pathname === "/cpa/calendar"){
    $(".HeaderMenu ul li:eq(7) svg").css("stroke", "var(--base2)");
    $(".Nav .NavContents .PageLocation").html("Calendar");
  };
});
// window.onload = pageLocationHighlight;
// window.onload = sideNavCloseAtFirst;
