
import React from 'react'

export default class HeaderProfile extends React.Component {
  render() {
    return (
      <div className="HeaderProfile">
        <img src={this.props.profileImageUrl}/>
        {this.props.profileName}
      </div>
    )
  }
}
