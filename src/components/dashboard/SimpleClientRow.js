import React from 'react'
export default class SimpleClientRow extends React.Component {
  render() {
    return (
      <li class="SimpleClientRow">
        <img className="ClientProfileImage" src={this.props.profileUrl}/>
        <div className="ClientInformation">
          <p className="ClientName">{this.props.name}</p>
          <p className="ClientSSN">{this.props.ssn}</p>
          <p className="ClientType">{this.props.type}</p>
        </div>
        <ul className="ClientActionList">
          <li><i>Email</i></li>
          <li><i>MSG</i></li>
          <li><i>INFO</i></li>
        </ul>
      </li>
    )
  }
}
