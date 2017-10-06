import React from 'react'
import { Label, Loader } from 'semantic-ui-react'

export default class TOFileInput extends React.Component {

  handleChange(selectorFiles: FileList)
  {
      console.log(selectorFiles);
  }

  render() {
    return (
      <li className="TOFileInput TOForm">
        {this.props.label}
        <input type='file' onChanged={ (e) => this.handleChange(e.target.files) }/>
        <Loader active inline />
      </li>
    )
  }
}
