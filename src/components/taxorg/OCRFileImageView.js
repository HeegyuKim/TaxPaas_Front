import React from 'react'
import { Checkbox, Segment, Radio } from 'semantic-ui-react'

import './OCRFileImageView.css'

function rect(ctx, props) {
    const {x, y, width, height} = props;
    ctx.strokeRect(x, y, width, height);
}

class HighlightView extends React.Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 800, 600);
        ctx.strokeStyle="#FF0000";
        ctx.lineWidth=10
        // draw children “components”
        this.props.areas.map((area, i) => {
          rect(ctx, area)
        })
    }
    render() {
      return (
        <canvas
          className="HighlightView"
          ref="canvas"
          width={800}
          height={600}
          style={{
            visibility: this.props.visibility
          }}
          />
      )
    }
}

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
      highlightAreaList: [
        {x: 550, y: 180, width: 100, height: 50},
        {x: 450, y: 140, width: 100, height: 50},
      ]
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
        <div className="OCRImageContainer">
          <img className="OCRImage" src={this.state.fileUrls[0]} />
          <HighlightView
            visibility={this.state.highlightEnabled? "visible":"hidden"}
            areas={this.state.highlightAreaList}
            />
        </div>
      </Segment>
    )
  }
}
