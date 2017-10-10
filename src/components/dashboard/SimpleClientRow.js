import React from 'react'
import { Icon } from 'semantic-ui-react'

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
          <table>
            <td><Icon name="mail"/></td>
            <td><Icon name="comment"/></td>
            <td><Icon name="info circle"/></td>
          </table>
        </ul>
      </li>
    )
  }
}
