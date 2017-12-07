//Taxpayer's Header

import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderProfile from './HeaderProfile'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Container">
          <div className="HeaderLogo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.18 17.22" width="100%" height="100%"><title>cpa_firm_logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls_color" d="M5.94,9.16H11.5v7.26A15.67,15.67,0,0,1,9,17a16.72,16.72,0,0,1-2.44.18,6.17,6.17,0,0,1-4.84-1.87A7.76,7.76,0,0,1,0,10,7.06,7.06,0,0,1,1.94,4.71a7.37,7.37,0,0,1,5.38-1.9,10.43,10.43,0,0,1,4.16.86l-1,2.38A7.06,7.06,0,0,0,7.3,5.29,3.94,3.94,0,0,0,4.22,6.58a5,5,0,0,0-1.16,3.48A5.59,5.59,0,0,0,4,13.54a3.23,3.23,0,0,0,2.72,1.2,9.61,9.61,0,0,0,1.89-.19V11.63H5.94Z"/><path class="cls_color" d="M22.91,17H14.84V3h8.07V5.45h-5.1V8.53h4.74V11H17.81v3.61h5.1Z"/><path class="cls_color" d="M31.76,17,28.39,6H28.3q.18,3.35.18,4.48V17H25.83V3h4l3.32,10.71h.06L36.76,3h4V17H38V10.4q0-.47,0-1.08t.13-3.26h-.09L34.48,17Z"/><path d="M49.74,17h-3V5.49H43V3H53.54V5.49h-3.8Z"/><path d="M63.61,17l-1-3.33H57.48l-1,3.33h-3.2L58.21,3h3.63l5,14.07ZM61.88,11.2q-1.41-4.53-1.59-5.13T60,5.13q-.32,1.23-1.81,6.07Z"/><path d="M79.9,17H76.51l-3.26-5.3L70,17H66.81L71.46,9.8,67.1,3h3.28l3,5,3-5h3.2L75.17,10Z"/><circle class="cls_color" cx="82.98" cy="2.21" r="2.21"/></g></g></svg>
          </div>
          <HeaderMenu />
          <HeaderProfile
            profileName="Abraham P Farris"
            profileImageUrl="/img/profile_02.jpg"
            />
        </div>
      </div>
    )
  }
}
