import React from 'react'
import ClientListRow from './ClientListRow'
import { Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './ClientList.css'

export default class ClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        clients: [
          {name:"Jullie Brown", type:"BS", progress:2, feedback:"No Feedback",
              memo:"Invited", preparer:"boseok"},
          {name:"Benjamin Johnson", type:"BS", progress:4, feedback:"No Feedback",
              memo:"Ready to Data Input", preparer:"james"},
          {name:"Charles Miller", type:"TS", progress:4, feedback:"No Feedback",
              memo:"Ready to Data Input", preparer:"james"},
          {name:"Kevin Davis", type:"TS", progress:4, feedback:"Important Client",
              memo:"Ready to Review", preparer:"boseok"},
          {name:"Fiona H. White", type:"TS", progress:5, feedback:"Important Client",
              memo:"Ready to Review", preparer:"boseok"},
          {name:"Isabella Moore", type:"BS", progress:5, feedback:"Review Quickly",
              memo:"Ready to Review", preparer:"james"},
          {name:"Mariana Taylor", type:"AA", progress:5, feedback:"Review Quickly",
              memo:"Ready to Review", preparer:"james"},
        ]
    }
  }
  render() {
    return (
      <div className="ClientList">
        {this.state.clients.map((client, i) => {
          return (
            <ClientListRow
              name={client.name}
              type={client.type}
              progress={client.progress}
              feedback={client.feedback}
              memo={client.memo}
              preparer={client.preparer}
              />
            )
          })}
        <div className="More">
          . . .
        </div>
      </div>
    )
  }
}
