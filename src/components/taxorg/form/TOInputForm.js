import React from 'react'
import { Input, Checkbox } from 'semantic-ui-react'

export default class TOInputForm extends React.Component {
  render() {
    return (
      <li className="TOInputForm TOForm">
        <Input
          label={this.props.label}
          placeholder={this.props.placeholder}
          labelPosition="left"
          />
      </li>
    )
  }
}
