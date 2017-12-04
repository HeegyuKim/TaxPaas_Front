import React from 'react'
import './ClientManagingDashboard.css'

import ClientManagingRow from './ClientManagingRow'


export default class ClientManagingDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        clients: [
          {client_id:"trump", personal_page:"client/trump", name:"Abraham P Farris", ssn:"*****4383", taxtype:"MFJ", progress:"4",
              spouse:"Allen", dependent:"2", healthcare:"12MTE", phone:"(231)-555-9000", email:"Abraham@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"3",
              spouse:"Spouse Name", dependent:"0", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"4",
              spouse:"Spouse Name", dependent:"1", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"1",
              spouse:"Spouse Name", dependent:"5", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"4",
              spouse:"Spouse Name", dependent:"0", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"3",
              spouse:"Spouse Name", dependent:"2", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
          {client_id:"000", personal_page:"client/000", name:"James Daniel", ssn:"*****0000", taxtype:"BS", progress:"2",
              spouse:"Spouse Name", dependent:"2", healthcare:"none", phone:"000-00-0000", email:"blah@mail.com", preparer:"boseok"},
        ]
      }
    }

  render() {
    return (
      <div className="ClientManagingDashboard">
        <div className="TableTitleRow">
          <div className="TableTitle Input"><input type="checkbox" id="select_all_input" /></div>
          <div className="TableTitle Profile">Client</div>
          <div className="TableTitle NameAndSSN">Name / SSN
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle TaxType">Type
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle PracticeStatus">Status
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Spouse">Spouse
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Dependent">Dependent
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle HealthCare">Healthcare
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Contact">Contact<div id="" className="Sorting" /></div>
          <div className="TableTitle Preparer">Preparer
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
        </div>

        {this.state.clients.map((client, i) => {
          return (
            <ClientManagingRow
              client_id={client.client_id}
              personal_page={client.personal_page}
              name={client.name}
              ssn={client.ssn}
              taxtype={client.taxtype}
              progress={client.progress}
              spouse={client.spouse}
              dependent={client.dependent}
              healthcare={client.healthcare}
              phone={client.phone}
              email={client.email}
            />
          )
        })}
      </div>
    )
  }
}
