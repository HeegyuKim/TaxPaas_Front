import React from 'react'
import SimpleClientRow from './SimpleClientRow'
import './SimpleClientList.css'

export default class SimpleClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clients : [
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_01.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_02.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_03.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_04.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_05.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_06.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_07.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_08.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_09.jpg",checked:false},
        {name:"Name",ssn:'******1234',type:'Business', profileUrl:"/img/profile_10.jpg",checked:false},
      ]
    }
  }
  onCheckedChange(index) {
    this.state.clients[index].checked = !this.state.clients[index].checked
    this.setState({
      clients: this.state.clients
    })
    this.props.onChangeSelectedItemCount(
      this.state.clients.filter((client, i) => client.checked).length
    )
  }
  selectAll() {
    this.setState({
      clients: this.state.clients.map((client, i) => {
        client.checked = true
        return client
      })
    })
    this.props.onChangeSelectedItemCount(this.state.clients.length)
  }
  render() {
    return (
      <ul className="SimpleClientList">
        {this.state.clients.map((client, i) => {
              return (
                <SimpleClientRow
                    index={i}
                    name={client.name}
                    ssn={client.ssn}
                    type={client.type}
                    profileUrl={client.profileUrl}
                    checked={client.checked}
                    onCheckedChange={this.onCheckedChange.bind(this)}
                    />
               );
          })}
      </ul>
    )
  }
}
