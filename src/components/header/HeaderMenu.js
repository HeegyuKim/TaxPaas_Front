import React from 'react'

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/client/trump">Client</a></li>
          <li><a href="/client/trump/taxorg">Source</a></li>
          <li><a href="/client/trump/ocr">Review</a></li>
          <li>Pay & E-File</li>
          <li>Communication</li>
          <li>Team</li>
          <li>Calendar</li>
        </ul>
      </div>
    )
  }
}
