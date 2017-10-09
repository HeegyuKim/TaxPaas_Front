import React from 'react'
import { Label, Loader, Form, Input } from 'semantic-ui-react'

export default class TOFileInput extends React.Component {

  handleChange(selectorFiles: FileList)
  {
      console.log(selectorFiles);
  }

  render() {
    return (
      <Form.Group className="TOFileInput TOForm">
        <Form.Field
          control={Input}
          type='file'
          label={this.props.index + ". " + this.props.label}
          placeholder={this.props.placeholder}
          value={this.props.value}
          />
      </Form.Group>
    )
  }
}
