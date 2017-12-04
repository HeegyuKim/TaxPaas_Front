import React from 'react'
import {Segment} from 'semantic-ui-react'
import './StatisticsView.css'

class StatisticsItem extends React.Component {
  render() {
    return (
      <Segment className="StatisticsItem">
        <img />
        <div>{this.props.type}</div>
        <p>{this.props.numerator} / {this.props.denominator}</p>
      </Segment>
    )
  }
}
export default class StatisticsView extends React.Component {
  render() {
    return (
      <div className="StatisticsView">
        <div className="ClientAdd">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.32 23.37" width="100%" height="100%"><title>client add</title><path  d="M13.26,1.2A5.17,5.17,0,1,0,10,10.37a5.14,5.14,0,0,0,3.28-1.2,5.12,5.12,0,0,0,0-8Z"/><path  d="M23.3,10.62H18.9V8h4.4V3.57h2.63V8h4.39v2.63H25.93V15H23.3Z"/><path  d="M20,22.17C20,16,15.5,11,10,11S0,16,0,22.17q0,.1,0,.2a1,1,0,0,0,1,1H18.94a1,1,0,0,0,1-1Q20,22.27,20,22.17Z"/></svg></div>

        <div className="Statistic ClientNumber">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.44 24.24" width="100%" height="100%"><title>client</title><path  d="M9.22,10.69A5.34,5.34,0,1,1,9.22,0,5.27,5.27,0,0,1,12.6,1.23a5.29,5.29,0,0,1,0,8.23A5.27,5.27,0,0,1,9.22,10.69ZM9.22,1a4.34,4.34,0,1,0,0,8.69,4.28,4.28,0,0,0,2.75-1A4.29,4.29,0,0,0,12,2,4.28,4.28,0,0,0,9.22,1Z"/><path  d="M16.33,24.24H2.11a2.12,2.12,0,0,1-1.58-.71A2,2,0,0,1,0,21.93C.7,16,4.58,11.73,9.22,11.73s8.52,4.29,9.21,10.2a2,2,0,0,1-.51,1.6A2.12,2.12,0,0,1,16.33,24.24ZM9.22,12.73c-4.06,0-7.59,4-8.21,9.31a1,1,0,0,0,.26.82,1.12,1.12,0,0,0,.84.38H16.33a1.12,1.12,0,0,0,.84-.38,1,1,0,0,0,.26-.82C16.81,16.74,13.28,12.73,9.22,12.73Z"/></svg>
          <StatisticsItem type="client" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Meeting">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.4 22.4" width="100%" height="100%"><title>meeting</title><path  d="M11.2,0A11.2,11.2,0,1,0,22.4,11.2,11.21,11.21,0,0,0,11.2,0Zm0,21.28A10.08,10.08,0,1,1,21.28,11.2,10.1,10.1,0,0,1,11.2,21.28Z"/><polygon  points="11.57 11.94 7.38 4.23 6.72 4.58 11.4 13.19 16.65 7.68 16.11 7.17 11.57 11.94"/></svg>
          <StatisticsItem type="meeting" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.1 17.16" width="100%" height="100%"><title>email</title><path  d="M22.49.1H1.61A1.52,1.52,0,0,0,.1,1.61V15.55a1.52,1.52,0,0,0,1.51,1.51H22.49A1.52,1.52,0,0,0,24,15.55V1.61A1.52,1.52,0,0,0,22.49.1ZM1.61.87H22.49a.73.73,0,0,1,.58.31L12.84,8.68a1.34,1.34,0,0,1-1.59,0L1,1.18A.73.73,0,0,1,1.61.87ZM22.49,16.29H1.61a.74.74,0,0,1-.74-.74V2L10.8,9.3a2.11,2.11,0,0,0,2.5,0L23.23,2V15.55A.74.74,0,0,1,22.49,16.29Z"/></svg>
          <StatisticsItem type="email" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Docs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.71 23.12" width="100%" height="100%"><title>docs</title><polygon  points="4.28 18.45 0 18.45 0 0 14.76 0 14.76 3.23 13.56 3.23 13.56 1.2 1.2 1.2 1.2 17.25 4.28 17.25 4.28 18.45"/><path  d="M20.71,23.12H6V4.67H20.71ZM7.15,21.92H19.51v-16H7.15Z"/></svg>
          <StatisticsItem type="source" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Calculation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.63 22.73" width="100%" height="100%"><title>calculation</title><polygon points="13.27 5.65 7.84 5.65 7.84 0 5.43 0 5.43 5.65 0 5.65 0 8.04 5.43 8.04 5.43 13.66 7.84 13.66 7.84 8.04 13.27 8.04 13.27 5.65"/><polygon points="21.29 11.53 17.45 15.37 13.45 11.38 11.75 13.08 15.75 17.07 11.9 20.91 13.59 22.6 17.44 18.76 21.41 22.73 23.11 21.04 19.13 17.06 22.98 13.22 21.29 11.53"/><rect x="15.08" y="4.41" width="12.81" height="1.75" transform="translate(2.55 16.74) rotate(-45)"/><circle cx="18.01" cy="1.82" r="1.67" transform="translate(3.99 13.27) rotate(-45)"/><circle cx="24.95" cy="8.76" r="1.67" transform="translate(1.11 20.21) rotate(-45)"/></svg>
          <StatisticsItem type="calc" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Review">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.67 15.41" width="100%" height="100%"><title>review</title><path  d="M27,0A7.7,7.7,0,0,0,19.3,7H15.38a7.71,7.71,0,1,0,0,1.4H19.3A7.7,7.7,0,1,0,27,0ZM7.71,13.54a5.84,5.84,0,1,1,5.84-5.84A5.84,5.84,0,0,1,7.71,13.54Zm19.26,0A5.84,5.84,0,1,1,32.8,7.71,5.84,5.84,0,0,1,27,13.54Z"/></svg>
          <StatisticsItem type="review" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Efile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.02 18.44" width="100%" height="100%"><title>e file</title><path  d="M29.43.7l-21,8.2a.43.43,0,0,0-.26.28l-1,3.25.67-4.6L27.48.62A.32.32,0,0,0,27.36,0L.48,1a.5.5,0,0,0-.31.87L6.36,7.06A1.77,1.77,0,0,1,7,8.68L5.6,18h0a.42.42,0,0,0,.63.38l7.11-4.14a.43.43,0,0,1,.49,0l2.64,2.24a.43.43,0,0,0,.6,0L29.91,1.37A.43.43,0,0,0,29.43.7Zm-27.28,1L22.32,1a.32.32,0,0,1,.12.62L7.8,7A.31.31,0,0,1,7.49,7L2,2.27A.32.32,0,0,1,2.15,1.71Zm10.3,12.12L7.62,16.65A.43.43,0,0,1,7,16.16l1.63-5.53a.43.43,0,0,1,.69-.21l3.2,2.71A.43.43,0,0,1,12.45,13.83ZM27.21,3.3,17,15.32a.43.43,0,0,1-.6,0L9.92,9.88A.43.43,0,0,1,10,9.15L26.73,2.62A.43.43,0,0,1,27.21,3.3Z"/></svg>
          <StatisticsItem type="efile" numerator="1" denominator="5"/></div>
        <div className="PartitionVertical"></div>

        <div className="Statistic Revenue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.7 26.08" width="100%" height="100%"><title>payment</title><path  d="M14.2,14.78a5.07,5.07,0,0,0-1.56-1.84,15.39,15.39,0,0,0-3.33-1.72L8,10.67V7.22a8.53,8.53,0,0,1,2.2.37q.76.24,1.58.56a1.27,1.27,0,0,0,1.62-.7L14,6a1.26,1.26,0,0,0-.69-1.67,16,16,0,0,0-4.14-1A1.28,1.28,0,0,1,8,2.09V0H6.48V2.2A1.26,1.26,0,0,1,5.42,3.45,7.87,7.87,0,0,0,2,4.68a4.6,4.6,0,0,0-2,4,6,6,0,0,0,.48,2.54A4.87,4.87,0,0,0,2,13a15.62,15.62,0,0,0,3.28,1.73l1.2.53v2.8a1.26,1.26,0,0,1-1.42,1.27A16.27,16.27,0,0,1,3.35,19q-.86-.22-1.64-.48A1.26,1.26,0,0,0,0,19.74v1.62a1.25,1.25,0,0,0,.82,1.19,14.09,14.09,0,0,0,2,.53,19.44,19.44,0,0,0,3.6.29h.05v2.72H8V24.41a1.26,1.26,0,0,1,1-1.25,8,8,0,0,0,3.61-1.36,5.34,5.34,0,0,0,2.07-4.54A5.65,5.65,0,0,0,14.2,14.78ZM6,9.68a1.49,1.49,0,0,1-.75-1.23c0-.61.42-1,1.23-1.16V10A5.3,5.3,0,0,1,6,9.68Zm2,9.68V16a5.19,5.19,0,0,1,1.13.77,1.39,1.39,0,0,1,.38,1C9.48,18.63,9,19.14,8,19.36Z"/></svg>
          <StatisticsItem type="revenue" numerator="$00" denominator="00"/></div>

        <div id="StatisticsViewCloser">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.76 27.83" width="100%" height="100%"><title>Arrow To Top</title><line x1="12.38" y1="25.83" x2="12.38" y2="3.16"/><path d="M2,11.19l8.35-8.35a2.87,2.87,0,0,1,4.05,0l8.35,8.35"/></svg>
        </div>
      </div>
    )
  }
}
