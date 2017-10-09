import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import DashboardContent from './DashboardContent'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navVisible: "hidden",
      left: "-300px"
    }
  }
  onNavOpen(e) {
    console.log('onNavOpen')
    this.setState({
      left: "0px",
      navCloseVisible: 'hidden'
    })
  }
  onNavClose(e) {
    console.log('onNavClose')
    this.setState({
      left: "-300px",
      navCloseVisible: 'visible'
    })
  }
  render() {
    return (
      <div className="Dashboard"
        style={{
          left: this.state.left
        }}
        >
        <DashboardNavigation
          visibility={this.state.visibility}
          onNavClose={(e)=>this.onNavClose(e)}
          />
        <DashboardContent
          navCloseVisible={this.state.navCloseVisible}
          onNavOpen={(e)=>this.onNavOpen(e)}
          />
      </div>
    )
  }
}
