import React from 'react'
import ProfileNavigator from './ProfileNavigator'
import ClientProfileDashboard from './ClientProfileDashboard'

export default class ClientProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client: {
        name: "Donald J Trump",
        phone: "12341234",
        age: 20,
        birth: 1997,
        occupation: "University Student",
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
        },
        serviceStartDate: "2017-10-15",
      }
    }
  }
  render() {
    return (
      <div class="ClientProfile">
        <ProfileNavigator
          {...this.state.client}
          />
        <ClientProfileDashboard
          />
      </div>
    )
  }
}
