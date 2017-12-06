import React from 'react'
import MailListRow from './MailListRow'
import '../../stylesheets/BaseTable.css'
import './MailList.css'
import { Table, Icon } from 'semantic-ui-react'

export default class MailList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        mails: [
          {name:"Jullie Brown",ssn:'******2353',type:'Personal',
            title: "Can you help me?", content: "I have been working about 3 years in IBM.", date:"2017-10-10 | 22:02"},
          {name:"Benjamin Johnson",ssn:'******6268',type:'Personal', title: "I need 1099 Tax Information", content: "Hello Mr. In.", date:"2017-10-10 | 16:33"},
          {name:"Charles Miller",ssn:'******0572',type:'Business', title: "How to refund my charity donations?", content: "", date:"2017-10-10 | 16:11"},
          {name:"Fiona H. White",ssn:'******0498',type:'Personal', title: "Please check our company's Tax Statements.", content: "", date:"2017-10-09 | 19:55"},
          {name:"Olivia Lopez",ssn:'******8472',type:'Business', title: "Here is your requirements.", content: "Thank you.", date:"2017-10-09 | 17:57"},
          {name:"Mariana Taylor",ssn:'******1259',type:'Personal', title: "I received Illegal Tax Refund Notifications.", content: "Why it happenned?", date:"2017-10-09 | 14:01"},
        ]
    }
  }
  render() {
    return (
      <div className="MailList">
        {this.state.mails.map((mail, i) => {
          return (
            <MailListRow
              name={mail.name}
              type={mail.type}
              title={mail.title}
              content={mail.content}
              date={mail.date}
              />
            )
          })
        }
        <div className="More">
          . . .
        </div>
      </div>
    )
  }
}
