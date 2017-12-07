import React from 'react'

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <ul className="custom_ul">
          <li><a href="/cpa">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.33 14.88" width="100%" height="100%"><title>home</title><path d="M1,7,6.32,1.77a2.71,2.71,0,0,1,3.82,0l5.19,5.32"/><path d="M11.92,7.43l-.06,5a1.39,1.39,0,0,1-1.37,1.42l-4.74-.06a1.4,1.4,0,0,1-1.34-1.46l.06-5"/></svg></a></li>
          <li><a href="/cpa/client">Client</a></li>
          <li><a href="/cpa/source">Source</a></li>
          <li><a href="/cpa/review">Review</a></li>
          <li><a href="/cpa/pay_and_efile">Pay & E-File</a></li>
          <li><a href="/cpa/communication">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.27 15.18" width="100%" height="100%"><title>chat</title><ellipse cx="9" cy="6.33" rx="8" ry="5.33"/><path d="M12.4,9.41s1.45,5.21,5.87,4.73"/></svg></a></li>
          <li><a href="/cpa/team">Team</a></li>
          <li><a href="/cpa/calendar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.73 15.33" width="100%" height="100%"><title>calendar</title><rect x="1" y="2.63" width="14.73" height="11.7" rx="2.77" ry="2.77"/><line x1="5" y1="4.68" x2="5" y2="1"/><line x1="8.37" y1="4.68" x2="8.37" y2="1"/><line x1="11.73" y1="4.68" x2="11.73" y2="1"/></svg></a></li>
        </ul>
      </div>
    )
  }
}
