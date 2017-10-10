import React from 'react'
import MailList from '../client/MailList'
import StatisticsView from './StatisticsView'
import ClientList from '../client/ClientList'
import { Icon, Segment, Button } from 'semantic-ui-react'
import './DashboardContent.css'


export default class DashboardContent extends React.Component {
  render() {
    return (
      <Segment className="DashboardContent">
        <div className="TodayTask">
          <Button icon="arrow right"
            onClick={(e)=>this.props.onNavOpen(e)}
            style={{
              visibility: this.props.navCloseVisible
            }}
            className="NavCloseButton"
            />
            "Today's task"
        </div>
        <StatisticsView />
        <MailList />
        <ClientList />
      </Segment>
    )
  }
}
