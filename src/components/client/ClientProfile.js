import React from 'react'
import ProfileNavigator from './ProfileNavigator'
import ClientProfileDashboard from './ClientProfileDashboard'
import ClientProgressView from './progress/ClientProgressView'


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class ClientProfile extends React.Component {
  constructor(props) {
    super(props)
    let people = [
      { name: "Donal J. Trump", occupation: "President", ssn: "123-45-6789", birthDate: "November 21, 1701", taxType: "Header of Household"},
      { name: "Jae In Moon", occupation: "President", ssn: "123-45-6789", birthDate: "July 08, 1960", taxType: "Header of Household"},
      { name: "Joon Pyo Red", occupation: "Not President", ssn: "123-45-6789", birthDate: "June 15, 1952", taxType: "Married Filing Joint"},
      { name: "Charles Ahn", occupation: "Not President", ssn: "123-45-6789", birthDate: "May 28, 1900", taxType: "Married Filing Joint"},
      { name: "Abraham P Farris", occupation: "System Engineer", ssn: "741-87-4383", birthDate: "September 21, 1968", taxType: "Married Filing Joint"},
    ]
    let random = getRandomInt(0, 5)

    this.state = {
      client: {
        name: people[random].name,
        phone: "12341234",
        age: "70",
        birth: "1960",
        occupation: people[random].occupation,
        ssn: people[random].ssn,
        taxType: people[random].taxType,
        email: "asdfasdf@mail.com",
        profileImageUrl: "/img/profile_0" + (random + 1) + ".jpg",
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
        taxPracticeCompany: "GemTax",
        serviceStartDate: "2017-10-15",
      }
    }
  }
  render() {
    return (
      <div class="ClientProfile">
        <div className="ClientProfileHeader">
          <div className="BackButton">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.14 14.27" width="100%" height="100%"><title>arrow_left</title><path d="M17.14,6.13H3.41L7.84,1.71A1,1,0,0,0,6.43.29L.29,6.43a1,1,0,0,0,0,1.41L6.43,14a1,1,0,0,0,1.41-1.41L3.41,8.13H17.14a1,1,0,0,0,0-2Z"/></svg>
            back to the list</div>
          <div className="PartitionV" />
          <div>Abraham P Farris</div>
          <div className="PartitionV" />
          <div className="TaxType">Married Filing Joint</div>
          <div className="PartitionV" />
          <div className="Progress">
            <p>progress status</p>
            <ClientProgressView
              level="4"
              />
            <p>on source documents checking</p>
          </div>
        </div>
        <div className="ClientProfileBody">
          <ProfileNavigator
            {...this.state.client}
            />
          <ClientProfileDashboard
            />
        </div>
      </div>
    )
  }
}
