import React from 'react'

export default class ProfileNavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ProfileNavigator">
        <img className="ProfileImage" src={this.props.profileImageUrl} /><br/>
        {this.props.name} <br/>
        <hr/>
        {this.props.attributes.map((attr, i)=> {
          return (
            <div className="ProfileAttribute">
              {attr.label} : {attr.value}
            </div>
          )
        })}
        <hr/>
        Email: {this.props.email} <br/>
        Phone: {this.props.phone} <br/>
        <div>
          <div className="ClientPreparer">{this.props.preparer.name}</div>
          <div className="ClientReviewer">{this.props.reviewer.name}</div>
        </div>
        <div className="ClientServiceStartDate">
          {this.props.serviceStartDate}
        </div>
      </div>
    )
  }
}
