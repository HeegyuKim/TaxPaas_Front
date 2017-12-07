import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class HeaderProfile extends React.Component {
  render() {
    return (
      <div className="HeaderProfile">
        <div className="item">
          <Icon name="chevron down" style={{marginRight:"0.6em", height:"1.2em", color:"#ccc"}}/>
          {this.props.profileName}
          <img src={this.props.profileImageUrl}/>
        </div>
      </div>
    )
  }
}
