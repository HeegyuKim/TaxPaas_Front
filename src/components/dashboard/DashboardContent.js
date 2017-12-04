import React from 'react'
import MailList from '../client/MailList'
import ClientList from '../client/ClientList'
import { Icon, Segment, Button } from 'semantic-ui-react'
import './DashboardContent.css'


export default class DashboardContent extends React.Component {
  render() {
    return (
      <Segment className="DashboardContent">
        <div id="dashboard-content">
          <div className="InnerContent">
            <div className="EmailListOuter">
              <div className="Nav">
                <div>Email list
                  <a href="">
                    <Icon name="arrow right" className="GoTo"/></a>
                </div>
                <div className="Group MailGroup">Group A</div>
                <div className="PartitionV" />
                <div className="Group MailGroup">Group B</div>
                <div className="PartitionV" />
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
                <div className="PartitionV" />
                <div className="Group ClientGroup">Group B</div>
                <div className="PartitionV" />
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
