import React from 'react'
import {Segment, Table, Icon, Button} from 'semantic-ui-react'
import "./ClientProfileDashboard.css"

const SourceDocStatusView = ({}) => {
  return (<Segment className="SourceDocStatusView"
    >
    Checking on Source Docs Completeness
  </Segment>
  )}
class AnnualSection extends React.Component {
  state = {
    expanded: this.props.expanded
  }
  onExpandButtonClick(e) {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    return <Segment
      className="AnnualSection"
      >
      <h1>{this.props.data.year}</h1>
      <Button className="ExpandButton" basic
        icon={this.state.expanded? "caret up":"dropdown"}
        onClick={(e)=>this.onExpandButtonClick(e)}
        />
      {/*
        Source Doc Table
      */}
      <div
        className="AnnualSectionContent"
        style={{
          maxHeight: this.state.expanded? "400px":"0px"
        }}
        >
        <div className="SourceDocTable">
          <h3>Source Doc List</h3>
          <Table className="ParentHalfTable" celled structured>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>owner</Table.HeaderCell>
                <Table.HeaderCell>Attached</Table.HeaderCell>
                <Table.HeaderCell>Source Doc</Table.HeaderCell>
                <Table.HeaderCell>Auto Input</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.data.sourceDocList.map((sourceDoc, i) => {
                return (
                  <tr>
                    <td>{sourceDoc.type}</td>
                    <td>{sourceDoc.owner}</td>
                    <td className="CenterAlignCell"><Icon name={sourceDoc.attached? 'check circle':''} size='large' /></td>
                    <td className="CenterAlignCell"><Icon name={sourceDoc.listChecked? "check circle":""} size='large' /></td>
                    <td className="CenterAlignCell"><Icon name={sourceDoc.autoInputChecked? "check circle":""} size='large' /></td>
                  </tr>
                )
              })}
            </Table.Body>
          </Table>
        </div>
        {/*
          Mail List Table
        */}
        <div className="MailTable">
          <h3>Communication</h3>
          <Table className="ParentHalfTable">
            {this.props.data.mailList.map((mail, i) => {
              return (
                <Table.Row>
                  <Table.Cell>
                    {mail.sender}
                    ({mail.type})
                    on {mail.date}<br/>
                    <b>{mail.title}</b><br/>
                    {mail.body}
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table>
        </div>
      </div>
    </Segment>
  }
}

export default class ClientProfileDashboard extends React.Component {
  state = {
    data : [
      {
        year: 2017,
        sourceDocList: [
          { type:"W-2s", owner: "self", attached: true, listChecked:false, autoInputChecked: false },
          { type:"W-2s", owner: "spouse", attached: false, listChecked:true, autoInputChecked: false },
          { type:"1099-INT", owner: "self", attached: false, listChecked:true, autoInputChecked: true },
          { type:"K-1", owner: "son", attached: false, listChecked:false, autoInputChecked: true },
        ],
        mailList: [
          { sender: "Antonio Breakson", type: "BK", title:"Hello World", body:"LOL~~~~~", starred: false, date: "SEP 23" },
          { sender: "Antonio Breakson", type: "BK", title:"Hello World", body:"LOL~~~~~", starred: false, date: "SEP 23" },
          { sender: "Antonio Breakson", type: "BK", title:"Hello World", body:"LOL~~~~~", starred: false, date: "SEP 23" },
          { sender: "Antonio Breakson", type: "BK", title:"Hello World", body:"LOL~~~~~", starred: false, date: "SEP 23" },
        ]
      },
      {
        year: 2016,
        sourceDocList: [],
        mailList: []
      },
      {
        year: 2015,
        sourceDocList: [],
        mailList: []
      },
      {
        year: 2014,
        sourceDocList: [],
        mailList: []
      },
    ],
  }
  render() {
    return (
      <Segment className="ClientProfileDashboard">
        <SourceDocStatusView

          />
        {this.state.data.map((data, i)=> {
          if(i != 0){
            return (
              <AnnualSection
                data={data}
                expanded={i==0}
                isCurrentYear={i==0}
                />
            )
          }
          else {
            return (
              <div>
                <AnnualSection
                  data={data}
                  expanded="true"
                  isCurrentYear="true"
                  />
                <h1>Last Years Database</h1>
              </div>
            )
          }
        })}
      </Segment>
    )
  }
}
