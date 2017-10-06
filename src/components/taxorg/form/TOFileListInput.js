import React from 'react'
import { Input, Checkbox, Button, Label } from 'semantic-ui-react'

export default class TOFileListInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [
        { filename: 'Filename', file: "?"}
      ]
    }
  }
  render() {
    return (
      <li className="TOFileListInput TOForm">
        {this.props.label}
        <Button>추가</Button>
        <ul>
          {this.state.files.map((file, i) => {
            return (
              <li className="TOFileRow">
                {file.filename}
                <Button>Delete</Button>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }
}
