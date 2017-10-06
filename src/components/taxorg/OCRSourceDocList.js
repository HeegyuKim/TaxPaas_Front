import React from 'react'
import { Loader, Segment } from 'semantic-ui-react'


class OCRSourceDocItem extends React.Component {
    render() {
      return (
        <tr className="OCRSourceDocItem">
          <td>
            { this.props.status=="complete"? "" : <Loader size="mini" active inline
              style={{marginRight:"10px"}}
              />}
            {this.props.filename}
          </td>
        </tr>
      )
    }
}

export default class OCRSourceDocList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Segment className="OCRSourceDocList">
        <h3>Source Doc</h3>
        <hr/>
        <table className="OCRSourceDocFileList">
        {this.props.files.map((file, i) => {
          return (
            <OCRSourceDocItem
              filename={file.filename}
              status={file.status}
              />
          )
        })}
        </table>
      </Segment>
    )
  }
}
