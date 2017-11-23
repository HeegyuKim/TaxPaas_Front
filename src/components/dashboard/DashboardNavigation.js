import React from 'react'
import './DashboardNavigation.css'
import { Input, Icon, Segment, Button, Divider } from 'semantic-ui-react'
import SimpleClientList from './SimpleClientList'

export default class DashboardNavigation extends React.Component {
  render() {
    return (
      <div className="DashboardNavigation"
        style={{
          maxWidth: this.props.visibility? "300px" : "0px"
        }}
        >
        <Segment>
          <div className="NavButtonList">

            <div className="NavTitle">
              <Button icon="arrow left" onClick={(e)=>this.props.onNavClose(e)} className="NavButton NavCloseButton"/>
                Client Shortcut
            </div>

            <div className="NavButton email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 20" width="100%" height="100%"><title>email</title><path d="M0,3.69V19a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V3.69L15.38,12.11a3.2,3.2,0,0,1-3.75,0Z"/><path d="M27,.72V0H0V.72L12.33,9.65a2,2,0,0,0,2.35,0Z"/></svg>
              Send Email <p>&nbsp;(to Selected)</p>
            </div>

            <div className="NavButton selectAll">
              Select All
              <p>0 clients selected</p>
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
            <div><SimpleClientList /></div>
          </div>
        </Segment>
      </div>
    )
  }
}
