import React from 'react'

import './HorizonNav.css'


export default class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <div className="NavButton" id="sidenav_onoff_b">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.76 27.83" width="100%" height="100%"><title>Arrow To Top</title><line x1="12.38" y1="25.83" x2="12.38" y2="3.16"/><path d="M2,11.19l8.35-8.35a2.87,2.87,0,0,1,4.05,0l8.35,8.35"/></svg>
        </div>
        <div className="NavContents">
          <div className="PageLocation"></div>
          <div className="PartitionVertical" />
          <div className="Task">Today&#39;s task :: <span>Reviewing all AutoInput Results.</span></div>
        </div>
        <div className="NavButton" id="StatisticsCompressOnOff">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.76 27.83" width="100%" height="100%"><title>Arrow To Top</title><line x1="12.38" y1="25.83" x2="12.38" y2="3.16"/><path d="M2,11.19l8.35-8.35a2.87,2.87,0,0,1,4.05,0l8.35,8.35"/></svg>
        </div>
      </div>
    )
  }
}
