import React from 'react'
import { Checkbox, Segment, Radio } from 'semantic-ui-react'


export default class OCRFileImageView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRecognized: false,
      filetype: "Form W-2 Wage and Tax Statements 2016",
      fileUrls: [
        "/img/profile.jpg"
      ],
      highlightEnabled: true,
    }
  }
  onHighlightEnabled(enable) {
    this.setState({
      highlightEnabled: enable
    })
  }
  render() {
    return (
      <Segment className="OCRFileImageView">
        <div className="OCRFileHeader">
          <h1 className="FileType">{this.state.filetype}</h1>
          <div className="Highlight">
            <Radio slider
              checked={this.state.highlightEnabled}
              label="Highlight"
              labelPosition="left"
              onChange={(e)=>this.onHighlightEnabled(e.target.value)}
              />
          </div>
        </div>
        <div>
          <img src={this.state.fileUrls[0]} />
        </div>
      </Segment>
    )
  }
}
