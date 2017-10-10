import React from 'react'
import './DashboardNavigation.css'
import { Input, Icon, Segment, Button, Divider } from 'semantic-ui-react'
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
        <tr className="FilterList">
          <tr className="ui basic">
            <td><Icon name="users"/><br/><p>All</p></td>
            <td><Icon name="user"/><br/><p>MY</p></td>
            <td><Icon name="checkmark box"/><br/><p>DOC</p></td>
            <td><Icon name="file text outline"/><br/><p>REVIEW</p></td>
            <td><Icon name="dollar"/><br/><p>PAY</p></td>
            <td><Icon name="send outline"/><br/><p>E-FILE</p></td>
          </tr>
        </tr>
        <tr><Input action={{ icon: 'search' }} size="large" placeholder='Search...' className="EmailSearch" /></tr>
        <tr><SimpleClientList /></tr>
      </table>
      </Segment>
      </div>
    )
  }
}
