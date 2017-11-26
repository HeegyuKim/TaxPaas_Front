import React from 'react'
import {Segment, Table, Icon, Button} from 'semantic-ui-react'
import {StarCheckbox} from '../common/StarCheckbox'
import "./ClientProfileDashboard.css"

// 화면 구성이 약간 바뀌어서 안 쓰게 된 부분, 임시 주석처리, 회의에서 합의
// const SourceDocStatusView = ({}) => {
//   return (
//     <Segment className="SourceDocStatusView"/></Segment>
//   )}

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
      <div className="AnnualSectionHeader">
        <p className="Year">{this.props.data.year}</p>
        {/*button으로 하면 스타일 먹이기 귀찮은데.. 혹시 div 써도 괜찮은가요?*/}
        <Button className="ExpandButton" basic
          icon={this.state.expanded? "caret up":"dropdown"}
          onClick={(e)=>this.onExpandButtonClick(e)}
          />
      </div>

      <div
        className="AnnualSectionContent"
        style={{
          maxHeight: this.state.expanded? "800px":"0px",
          paddingBottom: this.state.expanded? "2rem":"0",
        }}
        >
        {/*
          Source Doc Table
        */}
        <div className="SourceDocTable Item">
          <p className="Title">Source Doc List</p>
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
          <p>2017 Tax Organizer result <Icon name="arrow right"/></p>
        </div>
        {/*
          Mail List Table
        */}
        <div className="Communication Item">
          <p className="Title">Communication</p>
            {this.props.data.mailList.map((mail, i) => {
              return (
                <div>
                          {mail.sender}
                          {mail.type}
                          {mail.title}
                          {mail.date}

                          <input type='checkbox' />
                          <StarCheckbox style={{margin:"0px"}}/>
                          {mail.body}
                </div>
              )
            })}
        </div>
        {/*
          AnnualSectionContent > Communication Item End
        */}
      </div>
      {/*
        AnnualSectionContent End
      */}
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
      <segment className="ClientProfileDashboard">
        {/*
          화면 구성이 바뀌면서 주석처리된 부분
          <SourceDocStatusView/>
        */}
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
                {/*<p className="SubTitle">Last Years Database</p>*/}
              </div>
            )
          }
        })}
      </segment>
    )
  }
}
