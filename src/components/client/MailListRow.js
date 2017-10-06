import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'

export default class MailListRow extends React.Component {
  render() {
    return (
      <tr className="MailListRow">
        <Checkbox className="Check"/>
        <Checkbox className="StarCheckbox"/>
        <td className="td-4">{this.props.name}</td>
        <td className="td-1">{this.props.type}</td>
        <td className="td-4">{this.props.title}</td>
        <td className="td-4">{this.props.content}</td>
        <td className="td-2">{this.props.date}</td>
      </tr>
    )
  }
}
