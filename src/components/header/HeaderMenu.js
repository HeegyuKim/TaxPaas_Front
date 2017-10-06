import React from 'react'

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li>Client</li>
          <li>Source</li>
          <li>Review</li>
          <li>Pay & E-File</li>
          <li>Communication</li>
          <li>Team</li>
          <li>Calendar</li>
        </ul>
      </div>
    )
  }
}
