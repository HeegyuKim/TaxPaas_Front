import React from 'react'
import { Input, Checkbox, Loader, Button, Label, Form, Segment, Icon } from 'semantic-ui-react'
import './TOFileListInput.css'
import { Dropdown } from 'semantic-ui-react'
import fileOptions from './TOFileOptions'


export default class TOFileListInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [
        { filename: 'Filename', file: "?"},
        { filename: 'Filename', file: "?"},
        { filename: 'Filename', file: "?"},
      ]
    }
  }
  onClickAdd(e) {
    this.setState({
      files: this.state.files.concat((
        <input type="file" size="large"></input>
      ))
    })
  }
  removeItem(index) {
    this.setState((prevState) => ({
      files: this.state.files.filter((_, i) => i !== index)
    }))
  }
  render() {
    return (
      <div className="TOFileListInput TOForm">
        <label>{this.props.index}. {this.props.label}</label>
        <Segment>
          {this.state.files.map((file, i) => {
            let index = i;
            return (
              <Input className="TOFileRow"  icon placeholder='Search...'>
                <Dropdown
                  className="TOFileTypes"
                  placeholder="Select file type"
                  options={fileOptions}
                  selection openOnFocus
                  />
                <input
                className="TOFileInput"
                  type="file"
                  />
                <Icon className="CancelFileButton" name='cancel'
                  inverted circular link size="medium"
                  onClick={(e)=>this.removeItem(i)}
                  />
              </Input>
            )
          })}
          <br/>
          <div>
          <Button primary className="AddButton"

            onClick={(e)=>this.onClickAdd(e)}
            >
            Add
          </Button>
          </div>
        </Segment>
      </div>
    )
  }
}
