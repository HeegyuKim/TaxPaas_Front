import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './MailListRow.css'

export default class MailListRow extends React.Component {
  render() {
    return (
      <Table.Row className="MailListRow">
        <Table.Cell className="td-2" className="CheckBoxCell">
          <input type='checkbox' className="Check"/>
          <input type='checkbox' className="StarCheckbox"/>
        </Table.Cell>
        <Table.Cell className="td-2">{this.props.name}</Table.Cell>
        <Table.Cell className="td-1">{this.props.type}</Table.Cell>
        <Table.Cell className="td-4">{this.props.title}</Table.Cell>
        <Table.Cell className="td-4">{this.props.content}</Table.Cell>
        <Table.Cell className="td-2">{this.props.date}</Table.Cell>
      </Table.Row>
    )
  }
}
