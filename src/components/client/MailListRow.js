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
      <div className="MailListRow">
        <div className="CheckBoxCell">
          <input
            type='checkbox' className="Check" checked={this.state.important? "checked":""}
            onClick={this.onClickImportant.bind(this)}
            />
          <StarCheckbox
            color="yellow" checked={this.state.starred?"checked":""}
            onClick={this.onClickStarred.bind(this)}
            />
        </div>
        <div className="Name">{this.props.name}</div>
        <div className="Type">{this.props.type}</div>
        <div className="Title">{this.props.title}</div>
        <div className="Content">{this.props.content}</div>
        <div className="Date">{this.props.date}</div>
      </div>
    )
  }
}
