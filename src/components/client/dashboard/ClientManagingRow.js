import React from 'react'
import ClientProgressView from '../progress/ClientProgressView'

import './ClientManagingDashboard.css'


export default class ClientManagingRow extends React.Component {
  render() {
    return (
      <div className="ClientManagingRow">
        <div className="TableContent Input">
          <input type="checkbox" />
        </div>
        <div className="TableContent Profile">
          <div className="ProfileImg" />
        </div>
        <div className="TableContent NameAndSSN">
          <a href={this.props.personal_page}>
          <div className="Name">{this.props.name}</div>
          <div className="SSN"><span>SSN</span><span>{this.props.ssn}</span></div>
          </a>
        </div>
        <div className="TableContent TaxType">{this.props.taxtype}</div>
        <div className="TableContent PracticeStatus">
          <ClientProgressView level={this.props.progress} />
        </div>
        <div className="TableContent Spouse">{this.props.spouse}</div>
        <div className="TableContent Dependent">{this.props.dependent}</div>
        <div className="TableContent HealthCare">{this.props.healthcare}</div>
        <div className="TableContent Contact">
          <div className="Phone">
            <div className="Icon" />
            <div className="Contents">
              <div className="PhoneNumber">(812)555-8989 (*)</div>
              <div className="PhoneNumber">(213)555-8979</div>
              <div className="PhoneNumber">{this.props.phone}</div>
            </div>
          </div>
          <div className="Email">
            <div className="Icon" />
            <div className="Contents">
              <div className="EmailAddress">{this.props.email}</div>
            </div>
          </div>
        </div>
        <div className="TableContent Preparer">
          <div className="PreparerProfile" />
        </div>
      </div>
    )
  }
}
