import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './MailListRow.css'
import { StarCheckbox } from '../common/StarCheckbox'

export default class MailListRow extends React.Component {
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
      <Table.Row className="MailListRow">
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
        <Table.Cell className="Name td-2">{this.props.name}</Table.Cell>
        <Table.Cell className="Type td-1">{this.props.type}</Table.Cell>
        <Table.Cell className="Title td-4">{this.props.title}</Table.Cell>
        <Table.Cell className="Content td-4">{this.props.content}</Table.Cell>
        <Table.Cell className="Date td-2">{this.props.date}</Table.Cell>
      </Table.Row>
    )
  }
}
