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
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
          {name:"James Daniel", type:"BS", progress:"MAIL TITLE", feedback:"MAIL CONTENT",
              memo:"SEP 10", preparer:"boseok"},
        ]
    }
  }
  render() {
    return (
      <Table className="ClientList">
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
        })

        }
      </Table>
    )
  }
}
