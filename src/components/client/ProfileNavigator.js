import React from 'react'
import { Segment, Divider, Icon } from 'semantic-ui-react'
import './ProfileNavigator.css'


export default class ProfileNavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ProfileNavigator">
        <Segment>
          <img className="ProfileImage" src={this.props.profileImageUrl} /><br/>
          <p className="ClientName">{this.props.name}</p>
          <p className="ClientInfo">{this.props.age}({this.props.birth}) {this.props.occupation}</p>
          <Divider inverted />

          <div>
            <table className="ClientAttributeTable" >
              {this.props.attributes.map((attr, i)=> {
                return (
                  <tr className="ProfileAttribute">
                    <td className="Label">{attr.label}</td>
                    <td className="Value">{attr.value}</td>
                  </tr>
                )
              })}
            </table>
          </div>
          <Divider inverted />
          <table style={{width:"100%"}} className="ClientContactList">
            <tr>
              <td><Icon name="mail outline" /></td><td>{this.props.email}</td>
            </tr>
            <tr>
              <td><Icon name="phone"/></td><td>{this.props.phone}</td>
            </tr>
          </table>
        </Segment>
        <div>
          <table className="ClientManagerList">
            <td><Segment className="ClientPreparer">Preparer<br/>{this.props.preparer.name}</Segment></td>
            <td><Segment className="ClientReviewer">Reviewer<br/><b>{this.props.reviewer.name}</b></Segment></td>
          </table>
        </div>
        <div className="ClientServiceStartDate">
          Service has started from {this.props.serviceStartDate}
        </div>
      </div>
    )
  }
}
