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
      <tr className="OCRAutoInputItem Highlightable"
        onMouseOver={(e) => this.mouseOver()}
        >
        <td colspan="2">
          <div>
            <div>{this.props.index}. {this.props.label}</div>
            <div>
              <Input size="mini" style={{width:"100%"}}
                value={this.props.value}
                onChange={e => this.props.onValueChanged(this.props.index, e.target.value)}
                />
            </div>
          </div>
        </td>
        <td className="ButtonList">
          <Checkbox checked={this.props.checked}
            onChange={e => this.props.onCheckedChange(this.props.index, !this.props.checked)}
            />
          <Icon name="write" />
        </td>
      </tr>
    )
  }
}
export default class OCRAutoInputList extends React.Component {
  render() {
    return (
      <Segment className="OCRAutoInputList">
        <table>
          <tr>
            <th className="AutoInputResultTitle td-6" colspan="2">
              <b>Auto Input Result</b>
            </th>
            <th style={{margin:"0px"}}>
              <Checkbox label="All" labelPosition="left"
                checked={this.props.allChecked}
                onChange={e => this.props.onAllChecked(!this.props.allChecked)}
                />
            </th>
          </tr>
          <tr><td colspan="3"><hr/></td></tr>
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
        </table>
        <Button className="ConfirmButton" positive
          onClick={(e) => this.props.onConfirm()}>Confirm & Save</Button>
      </Segment>
    )
  }
}
