import React from 'react'
import MailList from '../client/MailList'
import StatisticsView from './StatisticsView'
import ClientList from '../client/ClientList'
import { Icon } from 'semantic-ui-react'
import '../../stylesheets/DashboardContent.css'


export default class DashboardContent extends React.Component {
  render() {
    return (
      <div className="DashboardContent">
        <div className="TodayTask">
          <Icon name="arrow right"
            onClick={(e)=>this.props.onNavOpen(e)}
            style={{
              visibility: this.props.navCloseVisible
            }}
            />
          <div>"Today's task"</div>
        </div>
        <StatisticsView />
        <MailList />
        <ClientList />
      </div>
    )
  }
}
