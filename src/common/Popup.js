import React from 'react'

export default class Popup extends React.Component {
  state = {
    visible: false,
    hideOnTouchOutside: true
  }
  isVisible() {
    return this.state.visible
  }
  setVisible(visible){
    this.setState({
      visible: visible
    })
    console.log("setVisible" + visible);
  }
  renderContent() {

  }
  render() {
    if(!this.state.visible) {
      return (<div></div>)
    }

    return (
      <div className="Popup" onClick={e => this.setVisible(false)}>
        {this.renderContent()}
      </div>
    )
  }
}
