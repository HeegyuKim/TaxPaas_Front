import React from 'react'
import { Input, Checkbox, Label, Button, Segment, Icon } from 'semantic-ui-react'
import '../../stylesheets/BaseTable.css'

class OCRAutoInputItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  onValueChanged(value) {
    this.setState({
      value: value
    })
  }
  render() {
    // 숫자라면
    if(Number(this.props.value)) {
      return (
        <tr className="OCRAutoInputItem Highlightable">
          <td className="td-4">
            {this.props.index}. {this.props.label}
          </td>
          <td>
            <Input className="td-2" size="mini"
              value={this.state.value}
              onChange={e => this.onValueChanged(e.target.value)}
              />
          </td>
          <td className="ButtonList">
            <Checkbox checked={this.props.checked}/>
            <Icon name="write" />
          </td>
        </tr>
      )
    }
    else {
      return (
        <tr className="OCRAutoInputItem Highlightable">
          <td colspan="2">
            <div>
              <div>{this.props.index}. {this.props.label}</div>
              <div>
                <Input type="textarea"
                  className="td-6"
                  onChange={e => this.onValueChanged(e.target.value)}
                  value={this.state.value}
                  />
              </div>
            </div>
          </td>
          <td className="ButtonList">
            <Checkbox checked={this.props.checked} />
            <Icon name="write" />
          </td>
        </tr>
      )
    }
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
              <Checkbox label="All" labelPosition="left" />
            </th>
          </tr>
          <tr><td colspan="3"><hr/></td></tr>
          {this.props.results.map((result, i) => {
            return (
              <OCRAutoInputItem
                index={i + 1}
                label={result.label}
                value={result.value}
                checked={result.checked}
                />
            )
          })}
        </table>
        <Button className="ConfirmButton" positive>Confirm & Save</Button>
      </Segment>
    )
  }
}
