import React from 'react'
import "./SourceDocsDashboard.css"


export default class SourceDocsDashboard extends React.Component {
  render() {
    return (
      <div className="SourceDocsDashboard">
        {/*header*/}
        <div className="DocsHeader">
          <div className="DocsNumber">
            14 Docs need to confirm</div>
          <div className="SortingType">
            sorting by clients</div>
          <div className="Setting">
            Docs bookmark setting</div>
        </div>
        {/*bookmark*/}
        <div className="DocsBookmark">
          <div className="Card">
            <div className="DocType">W-2</div>
            <div className="Statistic"><span>10</span>/103</div>
          </div>
          <div className="Card">
            <div className="DocType">W-2</div>
            <div className="Statistic"><span>10</span>/103</div>
          </div>
          <div className="Card">
            <div className="DocType">W-2</div>
            <div className="Statistic"><span>10</span>/103</div>
          </div>
        </div>
        {/*tabs*/}
        <div className="DocsTabs">
          <div className="Tabs">
            <div className="Tab">Docuemnts List</div>
            <div className="Tab">Whole Type List</div>
          </div>
          <div className="Search"></div>
          <div className="Contents">
            <div className="TableHeader">
              <input type="checkbox" />
              <div className="TableName">Docs Type</div>
              <div className="TableName">Client Name</div>
              <div className="TableName">Auto Input</div>
              <div className="TableName">Result check</div>
              <div className="TableName">Last Update</div>
              <div className="TableName">Calculation</div>
              <div className="TableName">Preparer</div>
              <div className="TableName">Download</div>
            </div>
            <div className="TableContent">
              <div className="TableRow">
                <input type="checkbox" />
                <div className="Contents">Docs Type</div>
                <div className="Contents">Client Name</div>
                <div className="Contents">Auto Input</div>
                <div className="Contents">Result check</div>
                <div className="Contents">Last Update</div>
                <div className="Contents">Calculation</div>
                <div className="Contents">Preparer</div>
                <div className="Contents">Download</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
