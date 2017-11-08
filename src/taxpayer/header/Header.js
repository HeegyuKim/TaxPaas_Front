import React from 'react'
import "./Header.css"
import HeaderProfile from './HeaderProfile'

class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <div>My CPA</div>
        <div>My CPA</div>
        <div>My CPA</div>
        <div>My CPA</div>
        <div>My CPA</div>
        <div>My CPA</div>
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
