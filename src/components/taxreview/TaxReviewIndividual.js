import React from 'react'
import "./TaxReviewIndividual.css"


export default class TaxReviewIndividual extends React.Component {
  state = {
    deductions: [
      { label: "Exemption allowance", amount: 4050 },
      { label: "Itemized deduction - Medical/dental expenses", amount: 678 },
      { label: "Itemized deduction - Taxes you paid", amount: 4700 },
      { label: "Itemized deduction - Interest you paid", amount: 0 },
      { label: "Itemized deduction - Gifts to charity", amount: 450 },
      { label: "Itemized deduction - Casualty and theft loss", amount: 2330 },
      { label: "Itemized deduction - Miscellaneous", amount: 0 },
      { label: "Itemized deduction - Other miscellaneous", amount: 0 },
    ]
  }
  render() {
    return (
      <div className="TaxReviewIndividual">
        <h1>Federal Tax</h1>
        <ul className="RefundCategoryTab">
          <li>Income</li>
          <li style={{backgroundColor: "#cccccc"}}><b>Deductions</b></li>
          <li>Credits</li>
          <li>Taxes</li>
          <li>Miscellaneous</li>
          <li>Summary</li>
        </ul>
        <h2>Deduction Examiner</h2>
        <p className="RefundCategoryDescription">
          You have completed the deductions topic for your 2016 federal return.
          We{"'"}ve summarized your deductions below.
        </p>
        <div className="RefundItemContainer">
        {this.state.deductions.map((item, i) => {
          return (
            <div className="RefundItem">
              <p className="Label">{item.label}</p>
              <p className="Amount">{item.amount}</p>
              <p className="ReviewButton"><b>Review</b></p>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
