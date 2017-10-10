import React from 'react'
import './DashboardNavigation.css'
import { Input, Icon, Segment, Button } from 'semantic-ui-react'
import SimpleClientList from './SimpleClientList'

export default class DashboardNavigation extends React.Component {
  render() {
    return (
      <div className="DashboardNavigation"
        style={{
          maxWidth: this.props.visibility? "330px" : "0px"
        }}
        >
      <Segment>
      <table className="NavButtonList">
        <tr><td className="NavTitleCell NavButton">
          <Button icon="arrow left" onClick={(e)=>this.props.onNavClose(e)} className="NavButton NavCloseButton"/>
          <table>
            <div className="NavTitle">Client Shortcut</div>
          </table>
        </td></tr>
        <tr><td className="SendEmailButton">
          <Button basic fluid className="NavButton">Send Email(to Selected)</Button>
        </td></tr>
        <tr><td>
          <Button basic fluid className="NavButton">Select All</Button>
        </td></tr>
        <tr>
        <td className="FilterList">
          <ul>
            <li>all</li>
            <li>my</li>
            <li>checked</li>
            <li>review</li>
            <li>paid</li>
            <li>e-file</li>
          </ul>
        </td></tr>
        <tr><Input action={{ icon: 'search' }} size="large" placeholder='Search...' className="EmailSearch" /></tr>
        <tr><SimpleClientList /></tr>
      </table>
      </Segment>
      </div>
    )
  }
}
