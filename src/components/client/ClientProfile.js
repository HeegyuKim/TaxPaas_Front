import React from 'react'
import ProfileNavigator from './ProfileNavigator'
import ClientProfileDashboard from './ClientProfileDashboard'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class ClientProfile extends React.Component {
  constructor(props) {
    super(props)
    let people = [
      { name: "Donal J. Trump", occupation: "President"},
      { name: "Jae In Moon", occupation: "President"},
      { name: "Joon Pyo Red", occupation: "Not President"},
      { name: "Charles Ahn", occupation: "Not President"},
    ]
    let random = getRandomInt(0, 4)

    this.state = {
      client: {
        name: people[random].name,
        phone: "12341234",
        age: "70",
        birth: "1960",
        occupation: people[random].occupation,
        email: "asdf",
        profileImageUrl: "/img/profile" + (random + 1) + ".jpg",
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
