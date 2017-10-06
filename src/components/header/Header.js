import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderProfile from './HeaderProfile'
import '../../stylesheets/Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="table">
        <div className="header-logo">TaxPaas Pro</div>
        <HeaderMenu />
        <HeaderProfile
          profileName="Boseok In"
          profileImageUrl="/img/profile.jpg"
          />
        </div>
      </div>
    )
  }
}
