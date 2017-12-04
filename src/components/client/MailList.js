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
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
          {name:"NAME", type:"TYPE", title:"MAIL TITLE", content:"Mail contents Lorem ipsum dolor sit amet", date:"2017-10-11 | 17:23"},
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
