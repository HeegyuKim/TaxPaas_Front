import React from 'react'
import { Checkbox, Table } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'
import './ClientListRow.css'
import { StarCheckbox } from '../common/StarCheckbox'
import ClientProgressView from './progress/ClientProgressView'

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
      <div className="ClientListRow">
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
        <div className="Name"><b>{this.props.name}</b></div>
        <div className="Type">{this.props.type}</div>
        <div className="Progress">
          <ClientProgressView
            level={this.props.progress}
            />
        </div>
        <div className="FeedBack">{this.props.feedback}</div>
        <div className="Memo">{this.props.memo}</div>
        <div className="Preparer">{this.props.preparer}</div>
      </div>
    )
  }
}
