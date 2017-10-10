import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './ClientListRow.css'

export default class ClientListRow extends React.Component {
  render() {
    return (
      <Table.Row className="ClientListRow">
        <Table.Cell className="CheckBoxCell">
          <input type='checkbox' />
          <input type='checkbox' />
        </Table.Cell>
        <Table.Cell className="td-4"><b>{this.props.name}</b></Table.Cell>
        <Table.Cell className="td-1">{this.props.type}</Table.Cell>
        <Table.Cell className="td-6">{this.props.progress}</Table.Cell>
        <Table.Cell className="td-6">{this.props.feedback}</Table.Cell>
        <Table.Cell className="td-6">{this.props.memo}</Table.Cell>
        <Table.Cell className="td-4">{this.props.preparer}</Table.Cell>
      </Table.Row>
    )
  }
}
