import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class SimpleClientRow extends React.Component {
  render() {
    return (
      <div className="SimpleClientRow">
        <input type="checkbox" />
        <img className="ClientProfileImage" src={this.props.profileUrl}/>
        <div className="ClientInformation">
          <p className="ClientName">{this.props.name}</p>
          <p className="ClientSSN">{this.props.ssn}</p>
          <p className="ClientType">{this.props.type}</p>
        </div>
        <div className="ClientActionList">
            <Icon name="mail"/>
            <Icon name="comment"/>
            <Icon name="info circle"/>
        </div>
      </div>
    )
  }
}
