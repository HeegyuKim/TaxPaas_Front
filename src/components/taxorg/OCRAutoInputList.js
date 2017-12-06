import React from 'react'
import { Input, Checkbox, Label, Button, Segment, Icon } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'

class OCRAutoInputItem extends React.Component {
  constructor(props) {
    super(props)
  }
  mouseOver() {
    console.log("hover " + this.props.index);
    this.props.setHighlightAreas([{
      x: this.props.x,
      y: this.props.y,
      width: this.props.width,
      height: this.props.height
    }])
  }
  render() {
    return (
      <div className="OCRAutoInputItem Highlightable"
        onMouseOver={(e) => this.mouseOver()}
        >
        <div className="Field">
          <div>{this.props.index}. {this.props.label}</div>
          <Input size="mini" style={{width:"100%"}}
            value={this.props.value}
            onChange={e => this.props.onValueChanged(this.props.index, e.target.value)}
            />
        </div>
        <div className="ButtonList">
          <Checkbox checked={this.props.checked}
            onChange={e => this.props.onCheckedChange(this.props.index, !this.props.checked)}
            />
          <Icon name="write" />
        </div>
      </div>
    )
  }
}
export default class OCRAutoInputList extends React.Component {
  render() {
    return (
      <div className="OCRAutoInputList">
        <h2><b>Auto Input Result</b></h2>
        <Checkbox label="All" labelPosition="left"
              checked={this.props.allChecked}
              onChange={e => this.props.onAllChecked(!this.props.allChecked)}
              />
        <hr/>
        <div className="AutoInputItemList">
          {this.props.results.map((result, i) => {
            return (
              <OCRAutoInputItem
                index={i + 1}
                { ...result}
                onCheckedChange={this.props.onCheckedChange}
                onValueChanged={this.props.onValueChanged}
                setHighlightAreas={this.props.setHighlightAreas}
                />
            )
          })}
        </div>
        <Button className="ConfirmButton" positive
          onClick={(e) => this.props.onConfirm()}>Confirm & Save</Button>
      </div>
    )
  }
}
