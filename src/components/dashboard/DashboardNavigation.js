import React from 'react'
import '../../stylesheets/DashboardNavigation.css'
import { Input, Icon } from 'semantic-ui-react'
import SimpleClientList from './SimpleClientList'

export default class DashboardNavigation extends React.Component {
  render() {
    return (
      <div className="DashboardNavigation">
      <table>
        <tr><td className="Title">
          Client Shortcut
          <Icon name="arrow left" onClick={(e)=>this.props.onNavClose(e)}/>
        </td></tr>
        <tr><td className="SendEmailButton">
          Send Email(to Selected)
        </td></tr>
        <tr><td>
          Select All
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
      </div>
    )
  }
}
