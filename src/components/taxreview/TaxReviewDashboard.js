import React from 'react'
import './TaxReviewDashboard.css'

import TaxReviewRow from './TaxReviewRow'


export default class TaxReviewDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        clients: [
          {client_id:"trump", personal_page:"client/trump", status: "1", review_status:"Done", name:"Abraham P Farris", ssn:"*****4383", docs:"12", taxtype:"MFJ",
              tax_return:"$165", payment:"20$", preparer:"Jack", phone:"(231)-555-9000", email:"Abraham@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_01.jpg", practitionerUrl:"/img/profile_p1.jpg"},
          {client_id:"000", personal_page:"client/000", status: "2", review_status:"Not yet", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_02.jpg", practitionerUrl:"/img/profile_p2.jpg"},
          {client_id:"000", personal_page:"client/000", status: "2", review_status:"On going", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_03.jpg", practitionerUrl:"/img/profile_p2.jpg"},
          {client_id:"000", personal_page:"client/000", status: "1", review_status:"Done", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_04.jpg", practitionerUrl:"/img/profile_p3.jpg"},
          {client_id:"000", personal_page:"client/000", status: "1", review_status:"Done", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_05.jpg", practitionerUrl:"/img/profile_p4.jpg"},
          {client_id:"000", personal_page:"client/000", status: "3", review_status:"Not yet", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_06.jpg", practitionerUrl:"/img/profile_p1.jpg"},
          {client_id:"000", personal_page:"client/000", status: "3", review_status:"Done", name:"James Daniel", ssn:"*****0000", docs:"N", taxtype:"BS",
              tax_return:"$0", payment:"20$", preparer:"Peter", phone:"000-00-0000", email:"blah@mail.com", due_date:"2017-10-21", profileUrl:"/img/profile_07.jpg", practitionerUrl:"/img/profile_p2.jpg"},
        ]
      }
    }
  render() {
    return (
      <div className="TaxReviewDashboard">
        <div className="TableTitleRow">
          <div className="TableTitle Input"><input type="checkbox" id="select_all_input" /></div>
          <div className="TableTitle Status">Review</div>
          <div className="TableTitle Profile">Client</div>
          <div className="TableTitle NameAndSSN">Name / SSN
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle TaxType">Type
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Docs">Docs
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Return">Return
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Payment">Payment
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle Preparer">Preparer
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
          <div className="TableTitle DueDate">Due Date
            <div id="" className="Sorting"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.76 12.19" width="100%" height="100%"><title>line arrow</title><path d="M11.88,12.19a4.35,4.35,0,0,1-3.09-1.28L.44,2.56A1.5,1.5,0,0,1,2.56.44l8.35,8.35a1.37,1.37,0,0,0,1.93,0L21.2.44a1.5,1.5,0,0,1,2.12,2.12L15,10.92A4.35,4.35,0,0,1,11.88,12.19Z"/></svg></div></div>
        </div>

        {this.state.clients.map((client, i) => {
          return (
            <TaxReviewRow
              client_id={client.client_id}
              profile_url={client.profileUrl}
              practitioner_profile={client.practitionerUrl}
              personal_page={client.personal_page}
              status={client.status}
              review_status={client.review_status}
              docs={client.docs}
              name={client.name}
              ssn={client.ssn}
              taxtype={client.taxtype}
              tax_return={client.tax_return}
              payment={client.payment}
              due_date={client.due_date}
              preparer={client.preparer}
            />
          )
        })}
      </div>
    )
  }
}
