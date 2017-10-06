import React from 'react'
import MailList from '../client/MailList'
import StatisticsView from './StatisticsView'
import ClientList from '../client/ClientList'

import '../../stylesheets/DashboardContent.css'


export default class DashboardContent extends React.Component {
  render() {
    return (
      <div className="DashboardContent">
        <div className="TodayTask">
          <p>"Today's task"</p>
        </div>
        <StatisticsView />
        <MailList />
        <ClientList />
      </div>
    )
  }
}
