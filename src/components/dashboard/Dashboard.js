import React from 'react'
import DashboardNavigation from './DashboardNavigation'
import DashboardContent from './DashboardContent'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <DashboardNavigation />
        <DashboardContent />
      </div>
    )
  }
}
