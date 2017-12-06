
import React from 'react'
import './TOPopupTable.css'
import { Button, Segment } from 'semantic-ui-react'
import TOPopupForm from './TOPopupForm'

export default class TOPopupTable extends React.Component {
  state = {
    showPopup: true,
    items: [
    ],
    popupData: {

    }
  }
  onAddItem(item) {
    this.setState({
      items: this.state.items.concat({
        label: item[0],
        value: item
      })
    })
    this.onClose()
  }
  onClickItem(index) {
    this.setState({
      showPopup: true,
      popupData: this.state.items[index]
    })
  }
  onClose() {
    this.setState({
      showPopup: false
    })
  }
  onClickAdd(e) {
    this.setState({
      showPopup: true,
      popupData: {}
    })
  }
  renderPopup() {
    if(this.state.showPopup) {
      return (
        <div className="TOTableInput Popup">
          <Segment className="Content">
              <TOPopupForm
                form={this.props.form}
                data={this.state.popupData}
                onAddItem={this.onAddItem.bind(this)}
                onClose={this.onClose.bind(this)}
               />
          </Segment>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="TOPopupTable">
        <div className="Table">
          {this.state.items.map((item, i) => {
            return (
              <Segment onClick={(e)=>{this.onClickItem(i)}}>
                <p>{item.label}</p>
              </Segment>
            )
          })}
        </div>
        <Button className="Add" fluid primary onClick={(e)=>{this.onClickAdd(e)}}>
          Add
        </Button>
        {this.renderPopup()}
      </div>
    )
  }
}
