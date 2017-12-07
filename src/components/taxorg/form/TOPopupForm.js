import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import "./TOPopupForm.css"


export default class TOPopupForm extends React.Component {
  state = {
    values: []
  }
  componentDidMount() {
    let values = new Array(this.props.form.length)
    if(this.props.popupData) {
      this.props.popupData.forEach((val, i)=> {
        values[i] = val
      })
    }
    this.setState({
      values: values
    })
  }
  onChangeInput(index, e) {
    this.setState({
      values: this.state.values.map((val, i) => {
          if(i == index) {
            return e.target.value
          }
          else {
            return val
          }
      })
    })
  }
  render() {
    return (
      <div className="TOPopupForm">
        <h1 className="Title">
          <p>{this.props.form.label}</p>
          <div class="Closer" onClick={(e)=>{this.props.onClose()}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.21 36.21" width="100%" height="100%"><title>close</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="0.35" y1="0.35" x2="35.85" y2="35.85"/><line x1="35.85" y1="0.35" x2="0.35" y2="35.85"/></g></g></svg>
          </div>
        </h1>
        {this.props.form.fields.map((field, i) => {
          return (
            <div>
              <p className="FieldLabel">{i + 1}. {field.label}</p>
              <input type="text"
                onChange={(e)=>{this.onChangeInput(i, e)}}
                value={this.state.values[i]}
                />
            </div>
          )
        })}
        <br/>
        <br/>
        <Button primary fluid onClick={(e)=>{this.props.onAddItem(this.state.values)}}>
          Add
        </Button>
      </div>
    )
  }
}
