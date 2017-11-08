
import React from 'react'
import { Icon } from 'semantic-ui-react'
import './HeaderProfile.css'

export default class HeaderProfile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <img src={this.props.profileImageUrl}/>
        <p className="Name">{this.props.profileName}</p>
        <Icon name="chevron down" style={{marginLeft:"3px"}}/>
      </div>
    )
  }
}
