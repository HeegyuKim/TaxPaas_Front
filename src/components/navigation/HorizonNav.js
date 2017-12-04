import React from 'react'
import $ from 'jquery'
import Nav from './Nav'
import StatisticsView from './StatisticsView'
import SearchNav from './SearchNav'
import './HorizonNav.css'


export default class HorizonNav extends React.Component {
  render() {
    return (
      <div className="HorizonNav">
          <Nav />
          <StatisticsView />
          <SearchNav />
      </div>
    )
  }
}
