import React from 'react'
import MailListRow from './MailListRow'
import '../../stylesheets/BaseTable.css'
import { Table } from 'semantic-ui-react'

export default class MailList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        mails: [
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"MAIL CONTENT", date:"SEP 10"},
        ]
    }
  }
  render() {
    return (
      <Table className="MailList">
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
      </Table>
    )
  }
}
