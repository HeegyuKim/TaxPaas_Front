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
        console.log("updateCanvas");
    }
    updateCanvas() {
        let width = 800
        let height = 600
        let imageWidth = this.props.imageWidth
        let imageHeight = this.props.imageHeight
        let ratioX = width / imageWidth
        let ratioY = height / imageHeight

        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, width, height);
        ctx.strokeStyle="#FF0000";
        ctx.lineWidth=10
        // draw children “components”
        if(this.props.enabled) {
          this.props.areas.map((area, i) => {
            rect(ctx, area)
          })
          console.log("update: " + this.props.enabled)
        }
    }
    render() {
      return (
        <canvas
          className="HighlightView"
          ref="canvas"
          width={800}
          height={600}
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
    }
  }
  onHighlightEnabled(enable) {
    this.setState({
      highlightEnabled: enable
    })
    console.log("highlightEnabled: " + enable)
  }
  render() {
    return (
      <div className="OCRFileImageView">
        <div className="OCRFileHeader">
          <h1 className="FileType">{this.state.filetype}</h1>
          <div className="Highlight">
            <Radio slider
              checked={this.state.highlightEnabled}
              label="Highlight"
              labelPosition="left"
              onChange={(e)=>{
                this.onHighlightEnabled(!this.state.highlightEnabled)
              }}
              />
          </div>
        </div>
        <div className="OCRImageContainer">
          <img className="OCRImage" src={this.props.file.images[0].src} />
          <HighlightView
            enabled={this.state.highlightEnabled}
            areas={this.props.highlightAreaList}
            />
        </div>
      </div>
    )
  }
}
