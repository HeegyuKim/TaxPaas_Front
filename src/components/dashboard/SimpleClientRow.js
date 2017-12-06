import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class SimpleClientRow extends React.Component {
  render() {
    return (
      <div className="SimpleClientRow"
        onClick={e => this.props.onCheckedChange(this.props.index)}
        >
        <input type="checkbox" checked={this.props.checked}
          onChange={(e) => this.props.onCheckedChange(this.props.index)}
          />
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
