import React from 'react'
import ClientProgressView from '../client/progress/ClientProgressView'

import './TaxReviewDashboard.css'


export default class TaxReviewRow extends React.Component {
  render() {
    return (
      <div className="TaxReviewRow">
        <div className="TableContent Input">
          <input type="checkbox" />
        </div>
        <div className="TableContent Status">
          <div className="StatusInfo" status={this.props.status}>{this.props.review_status}</div>
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
        <div className="TableContent Docs">
          <div className="DocsNumber">{this.props.docs}</div>
        </div>
        <div className="TableContent Return">{this.props.tax_return}</div>
        <div className="TableContent Payment">{this.props.payment}</div>
        <div className="TableContent Preparer">
          <div className="PreparerProfile" />
        </div>
        <div className="TableContent DueDate">{this.props.due_date}</div>
      </div>
    )
  }
}
