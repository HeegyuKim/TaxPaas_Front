import React from 'react'
import SimpleClientRow from './SimpleClientRow'
import './SimpleClientList.css'

export default class SimpleClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients : [
        {name:"Jullie Brown",ssn:'******2353',type:'Personal', profileUrl:"/img/profile_01.jpg",checked:false},
        {name:"Benjamin Johnson",ssn:'******6268',type:'Personal', profileUrl:"/img/profile_02.jpg",checked:false},
        {name:"Charles Miller",ssn:'******0572',type:'Business', profileUrl:"/img/profile_03.jpg",checked:false},
        {name:"Kevin Davis",ssn:'******4421',type:'Business', profileUrl:"/img/profile_04.jpg",checked:false},
        {name:"John Harris",ssn:'******3579',type:'Personal', profileUrl:"/img/profile_05.jpg",checked:false},
        {name:"Fiona H. White",ssn:'******0498',type:'Personal', profileUrl:"/img/profile_06.jpg",checked:false},
        {name:"Olivia Lopez",ssn:'******8472',type:'Business', profileUrl:"/img/profile_07.jpg",checked:false},
        {name:"Isabella Moore",ssn:'******4639',type:'Personal', profileUrl:"/img/profile_08.jpg",checked:false},
        {name:"Jenniffer Gonzalez",ssn:'******8572',type:'Business', profileUrl:"/img/profile_09.jpg",checked:false},
        {name:"Mariana Taylor",ssn:'******1259',type:'Personal', profileUrl:"/img/profile_10.jpg",checked:false},
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
