import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './ClientListRow.css'
import { StarCheckbox } from '../common/StarCheckbox'

export default class ClientListRow extends React.Component {
  state = {
    important: this.props.checked,
    starred: this.props.starred,
  }
  onClickImportant(e) {
    this.setState({
      important: !this.state.important
    })
  }
  onClickStarred(e) {
    this.setState({
      starred: !this.state.starred
    })
  }
  render() {
    return (
      <Table.Row className="ClientListRow">
        <Table.Cell className="td-2" className="CheckBoxCell">
          <input
            type='checkbox' className="Check" checked={this.state.important? "checked":""}
            onClick={this.onClickImportant.bind(this)}
            />
          <StarCheckbox
            color="yellow" checked={this.state.starred?"checked":""}
            onClick={this.onClickStarred.bind(this)}
            />
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
