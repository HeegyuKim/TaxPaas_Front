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

        if(this.props.areas.length > 0) {
          let pos = this.props.areas[0]
          this.props.imageContainer.scrollLeft = pos.x - 200
          this.props.imageContainer.scrollTop = pos.y - 200
        }
    }
    updateCanvas() {
        let width = this.props.imageWidth
        let height = this.props.imageHeight
        let imageWidth = this.props.imageWidth
        let imageHeight = this.props.imageHeight
        let ratioX = width / imageWidth
        let ratioY = height / imageHeight

        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, width, height);
        ctx.strokeStyle="#e65520";
        ctx.lineWidth=5;
        ctx.borderRadius=10;
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
          width={this.props.imageWidth}
          height={this.props.imageHeight}
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
      docsname: "W-2 Wage",
      docsinfo: "Tax Statements 2016",
      fileUrls: [
        "/img/profile.jpg"
      ],
      highlightEnabled: true,
      imageWidth: 0,
      imageHeight: 0
    }
  }
  onHighlightEnabled(enable) {
    this.setState({
      highlightEnabled: enable
    })
    console.log("highlightEnabled: " + enable)
  }
  onImageLoad(e) {
      console.log(e.target.width + " X " + e.target.height);
    this.setState({
      imageWidth: e.target.width,
      imageHeight: e.target.height
    })
  }
  render() {
    return (
      <div className="OCRFileImageView">
        <div className="OCRFileHeader">
          <div className="FileType">Form <span>{this.props.file.docName}</span></div>
          <div className="Highlight">
            <Radio slider
              className="Slider"
              checked={this.state.highlightEnabled}
              label="Highlight On/Off"
              labelPosition="left"
              onChange={(e)=>{
                this.onHighlightEnabled(!this.state.highlightEnabled)
              }}
              />
          </div>
        </div>
        <div ref="imageContainer" className="OCRImageContainer">
          <img className="OCRImage" src={this.props.file.images[0].src}
            onLoad={this.onImageLoad.bind(this)}
            />
          <HighlightView
            enabled={this.state.highlightEnabled}
            areas={this.props.highlightAreaList}
            imageWidth={this.state.imageWidth}
            imageHeight={this.state.imageHeight}
            imageContainer={this.refs.imageContainer}
            />
        </div>
      </div>
    )
  }
}
