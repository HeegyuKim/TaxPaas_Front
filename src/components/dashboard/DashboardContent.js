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
        <div id="dashboard-content">
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

          <div className="InnerContent">
            <div className="EmailListOuter">
              <div className="Nav">
                <div>Email list
                  <a href="">
                    <Icon name="arrow right" className="GoTo"/></a>
                </div>
                <div className="Group MailGroup">Group A</div>
                <div className="Partition" />
                <div className="Group MailGroup">Group B</div>
                <div className="Partition" />
                <div className="Group MailGroup">Group C</div>
              </div>
              <MailList />
            </div>
            <div className="ClientListOuter">
              <div className="Nav">
                <div>Client list
                  <a href="">
                    <Icon name="arrow right" className="GoTo"/></a>
                </div>
                <div className="Group ClientGroup">Group A</div>
                <div className="Partition" />
                <div className="Group ClientGroup">Group B</div>
                <div className="Partition" />
                <div className="Group ClientGroup">Group C</div>
              </div>
              <ClientList />
            </div>
          </div>

        </div>
      </Segment>
    )
  }
}
