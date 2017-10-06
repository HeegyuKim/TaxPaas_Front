import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'

export default class ClientListRow extends React.Component {
  render() {
    return (
      <tr className="ClientListRow">
        <Checkbox className="Check"/>
        <Checkbox className="StarCheckbox"/>
        <td className="td-4">{this.props.name}</td>
        <td className="td-1">{this.props.type}</td>
        <td className="td-4">{this.props.progress}</td>
        <td className="td-4">{this.props.feedback}</td>
        <td className="td-3">{this.props.memo}</td>
        <td className="td-2">{this.props.preparer}</td>
      </tr>
    )
  }
}
