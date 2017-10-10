import React from 'react'
import SimpleClientRow from './SimpleClientRow'
import './SimpleClientList.css'

export default class SimpleClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients : [
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile2.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile3.jpg"},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"img/profile4.jpg"},
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
