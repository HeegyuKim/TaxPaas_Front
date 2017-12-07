import React from 'react'
import { Loader, Segment } from 'semantic-ui-react'


class OCRSourceDocItem extends React.Component {
    render() {
      return (
        <div className="OCRSourceDocItem"
          style={{
            cursor: "pointer"
          }}
          onClick={this.props.onClick}
          >
          <div>
            { this.props.status=="complete"? "" : <Loader size="mini" active inline
              style={{marginRight:"10px"}}
              />}
            {this.props.filename}
          </div>
        </div>
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
        <div className="ListTitle">Source Docs List</div>
        <div className="OCRSourceDocFileList">
        {this.props.files.map((file, i) => {
          return (
            <OCRSourceDocItem
              filename={file.filename}
              status={file.status}
              onClick={(e) => this.props.onShowSourceDoc(file.id)}
              />
          )
        })}
        </div>
      </Segment>
    )
  }
}
