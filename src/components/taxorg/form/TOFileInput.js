import React from 'react'
import { Label, Loader, Form, Input, Dropdown } from 'semantic-ui-react'
import fileOptions from './TOFileOptions'

export default class TOFileInput extends React.Component {

  handleChange(selectorFiles: FileList)
  {
      console.log(selectorFiles);
  }

  render() {
    return (
      <div className="TOFileInput">
        <p>{this.props.index + ". " + this.props.label}</p>

        <Form.Group className="TOForm">
          <Form.Field
            control={Dropdown}
            placeholder="Select file type"
            selection
            options={fileOptions}
            />
          <Form.Field
            control={Input}
            type='file'
            placeholder={this.props.placeholder}
            value={this.props.value}
            />
        </Form.Group>
      </div>
    )
  }
}
