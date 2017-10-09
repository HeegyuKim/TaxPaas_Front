import React from 'react'
import SimpleClientRow from './SimpleClientRow'
import '../../stylesheets/SimpleClientList.css'

export default class SimpleClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients : [
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
        {name:"Name",ssn:'******1234',type:'Business'},
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
                     />
               );
          })}
      </ul>
    )
  }
}
