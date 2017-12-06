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
          <Button secondary onClick={(e)=>{this.props.onClose()}}>
            X
          </Button>
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
