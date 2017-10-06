import React from 'react'
import ProfileNavigator from './ProfileNavigator'
import './ClientProfile.css'

export default class ClientProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client: {
        name: "Donald J Trump",
        phone: "12341234",
        email: "asdf",
        profileImageUrl: "/img/profile.jpg",
        attributes: [
          {label:'hello', value:'world'},
          {label:'hello', value:'world'},
          {label:'hello', value:'world'},
        ],
        preparer: {
          name: "Boseok.In"
        },
        reviewer: {
          name: "Boseok.In"
        }
      }
    }
  }
  render() {
    return (
      <div class="ClientProfile">
        <ProfileNavigator
          name={this.state.client.name}
          email={this.state.client.email}
          phone={this.state.client.phone}
          profileImageUrl={this.state.client.profileImageUrl}
          attributes={this.state.client.attributes}
          preparer={this.state.client.preparer}
          reviewer={this.state.client.reviewer}
          />
      </div>
    )
  }
}
