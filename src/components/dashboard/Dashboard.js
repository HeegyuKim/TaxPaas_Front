import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import DashboardContent from './DashboardContent'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navShow: true
    }
  }
  onNavOpen(e) {
    console.log('onNavOpen')
    this.setState({
      navShow: true
    })
  }
  onNavClose(e) {
    console.log('onNavClose')
    this.setState({
      navShow: false
    })
  }
  render() {
    return (
      <div className="Dashboard"
        >
        <DashboardNavigation
          visibility={this.state.navShow}
          onNavClose={(e)=>this.onNavClose(e)}
          />
        <DashboardContent
          navCloseVisible={this.state.navShow? "hidden":"visible"}
          onNavOpen={(e)=>this.onNavOpen(e)}
          />
      </div>
    )
  }
}
