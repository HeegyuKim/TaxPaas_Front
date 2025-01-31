import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderProfile from './HeaderProfile'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Container">
          <div className="HeaderLogo">taxpaaspro</div>
          <HeaderMenu />
          <HeaderProfile
            profileName="Boseok In"
            profileImageUrl="/img/profile_p1.jpg"
            />
        </div>
      </div>
    )
  }
}
