import React from 'react'
import { Input, Label, Form } from 'semantic-ui-react'

export default class TOInputForm extends React.Component {
  render() {
    return (
      <Form.Field inline className="TOInputForm TOForm">
        <label>{this.props.index}. {this.props.label}</label>
        <Input
          placeholder={this.props.placeholder}
          labelPosition="left"
          width={this.props.width==null? "2":this.props.width}
          />
      </Form.Field>
    )
  }
}
