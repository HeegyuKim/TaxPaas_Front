import React from 'react'
import '../../stylesheets/DashboardNavigation.css'
import { Input } from 'semantic-ui-react'
import SimpleClientList from './SimpleClientList'

const SearchInput = () => (
  <Input placeholder='Search...' />
)

export default class DashboardNavigation extends React.Component {
  render() {
    return (
      <div className="DashboardNavigation">
        <div className="Title">Client Shortcut</div>
        <div className="SendEmailButton">
          Send Email(to Selected)
        </div>
        <div>
          Select All
        </div>
        <div className="FilterList">
          <ul>
            <li>all</li>
            <li>my</li>
            <li>checked</li>
            <li>review</li>
            <li>paid</li>
            <li>e-file</li>
          </ul>
        </div>
        <div className="EmailSearch">
          <SearchInput />
        </div>
        <SimpleClientList />
      </div>
    )
  }
}
