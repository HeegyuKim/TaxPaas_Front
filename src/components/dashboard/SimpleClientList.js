import React from 'react'
import SimpleClientRow from './SimpleClientRow'
import './SimpleClientList.css'

export default class SimpleClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients : [
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_01.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_02.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_03.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_04.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_05.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_06.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_07.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_08.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_09.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile_10.jpg"},
      ]
    }
  }
  render() {
    return (
      <ul className="SimpleClientList">
        {this.state.clients.map((client, i) => {
              return (
                <SimpleClientRow name={client.name}
                                ssn={client.ssn}
                                type={client.type}
                                profileUrl={client.profileUrl}
                     />
               );
          })}
      </ul>
    )
  }
}
