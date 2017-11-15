import React from 'react'
import "./Header.css"
import HeaderProfile from './HeaderProfile'

class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <div>
          <div><p>Dashboard</p></div>
          <div><p>Message</p></div>
          <div><p>Tax Organizer</p></div>
          <div><p>Review</p></div>
          <div><p>History</p></div>
        </div>
      </div>
    )
  }
}

export default class TaxPayerHeader extends React.Component{
  render() {
    return (
      <div className="TaxPayerHeader">
        <p className="Logo">TaxPaaS</p>
        <HeaderMenu />
        <HeaderProfile
          profileImageUrl="/img/profile.jpg"
          profileName="Boseok In"
          />
      </div>
    )
  }
}
