
import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class HeaderProfile extends React.Component {
  render() {
    return (
      <div className="HeaderProfile">
        <img src={this.props.profileImageUrl}/>
        {this.props.profileName}
        <Icon name="chevron down" style={{marginLeft:"3px"}}/>
      </div>
    )
  }
}
