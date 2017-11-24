
import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class ProgressButton extends React.Component {
  getButtonIcon() {
    if(this.props.type == "progressing") {
      return "dot circle outline"
    }
    else if(this.props.type == "progressed") {
      return "circle"
    }
    else {
      return "circle outline"
    }
  }
  render (){
    return (
      <div
        {...this.props}
        // size={this.props.size || "large"}
        className={"ProgressButton " + this.props.className }
        // name={this.getButtonIcon()}
        />
    )
  }
}
