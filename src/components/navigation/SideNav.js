import React from 'react'
import $ from 'jquery'

import { Input, Icon, Segment, Button, Divider } from 'semantic-ui-react'
import SimpleClientList from '../dashboard/SimpleClientList'
import './SideNav.css'
import SendMailPopup from './SendMailPopup'

export default class SideNav extends React.Component {
  state = {
    selectedItemCount: 0
  }
  onChangeSelectedItemCount(count) {
    this.setState({
      selectedItemCount: count
    })
    console.log("count: " + count)
  }
  render() {
    return (
      <div className="SideNav">
        <SendMailPopup ref="sendMailPopup"/>
        <Segment>
          <div className="NavButtonList">

            <div className="NavTitle">
              <div className="SideNavOnOff" id="sidenav_onoff_a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.83 24.76" width="100%" height="100%"><title>Arrow left line</title><line x1="31.83" y1="12.38" x2="3.16" y2="12.38"/><path d="M11.19,22.76,2.84,14.41a2.87,2.87,0,0,1,0-4.05L11.19,2"/></svg>
              </div>
              Client Shortcut
            </div>

            <div className="NavButton email"
              onClick={ e =>
                this.refs.sendMailPopup.open(this.refs.clientList.getSelectedClients()) 
              }
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 20" width="100%" height="100%"><title>email</title><path d="M0,3.69V19a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V3.69L15.38,12.11a3.2,3.2,0,0,1-3.75,0Z"/><path d="M27,.72V0H0V.72L12.33,9.65a2,2,0,0,0,2.35,0Z"/></svg>
              Send Email <p>&nbsp;(to Selected)</p>
            </div>

            <div className="NavButton selectAll" onClick={ e => this.refs.clientList.selectAll() }>
              Select All
              <p>{this.state.selectedItemCount} clients selected</p>
            </div>

            <div className="FilterList">
              <div className="selected"><Icon name="users"/><br/><p>All</p></div>
              <div><Icon name="user"/><br/><p>MY</p></div>
              <div><Icon name="checkmark box"/><br/><p>DOC</p></div>
              <div><Icon name="file text outline"/><br/><p>REVIEW</p></div>
              <div><Icon name="dollar"/><br/><p>PAY</p></div>
              <div><Icon name="send outline"/><br/><p>E-FILE</p></div>
            </div>

            <div><Input action={{ icon: 'search' }} size="large" placeholder='Search...' className="EmailSearch" /></div>
            <div>
              <SimpleClientList
                    ref="clientList"
                    onChangeSelectedItemCount={this.onChangeSelectedItemCount.bind(this)}
                    />
            </div>
          </div>
        </Segment>
      </div>
    )
  }
}
