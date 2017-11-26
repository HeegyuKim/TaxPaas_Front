import React from 'react'
import { Segment, Divider, Icon } from 'semantic-ui-react'
import './ProfileNavigator.css'


export default class ProfileNavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ProfileNavigator">
        <Segment className="Main">

          <div className="ProfileNavHeader">
            <p className="Name">{this.props.name}</p>
            <p className="Ssn">{this.props.ssn}</p>
            <div className="NavTab">
              <p>TP</p>
              <p>SP</p>
              <p>DP1</p>
              <p>DP2</p>
            </div>
          </div>

          <div className="ProfileNavBody">
            <div className="Taxpayer ProfileNavBodyItem">
              <p className="Relation">Tax Payer</p>
              <img className="ProfileImage" src={this.props.profileImageUrl} /><br/>
              <p className="ClientName">{this.props.name}</p>
              <p className="ClientSsn"><span>SSN</span>{this.props.ssn}</p>
              <p className="ClientInfo">{this.props.age} ({this.props.birth}) {this.props.occupation}</p>
              <p className="ClientTaxType">{this.props.taxType}</p>
              <div className="PartitionHorizon"/>
              <div className="Attribute">
                {this.props.attributes.map((attr, i)=> {
                  return (
                    <div className="ProfileAttribute">
                      <div className="Label">{attr.label}</div>
                      <div className="Value">{attr.value}</div>
                    </div>
                  )
                })}
              </div>{/*ProfileNavBody > Attribute End*/}
            </div>{/*ProfileNavBody > Taxpayer End*/}
            <div className="PartitionHorizon Dark"/>

            <div className="Spouse ProfileNavBodyItem">
              <p className="Relation">Spouse</p>
              <p className="ClientName">Ellen S Farris</p>
              <p className="ClientSsn"><span>SSN</span>000-00-0000</p>
              <p className="ClientInfo">old(birth year) occupation</p>
              <div className="PartitionHorizon"/>
              <div className="Attribute">
                Something<br/>Something<br/>Something
              </div>
            </div>{/*ProfileNavBody > Spouse End*/}
            <div className="PartitionHorizon Dark"/>

            <div className="Dependent ProfileNavBodyItem">
              <p className="Relation">Dependent</p>
              <p className="ClientName">Timothy J Farris</p>
              <p className="ClientSsn"><span>SSN</span>000-00-0000</p>
              <p className="ClientInfo">old(birth year) occupation</p>
              <div className="PartitionHorizon"/>
              <div className="Attribute">
                Something<br/>Something<br/>Something
              </div>
            </div>{/*ProfileNavBody > Spouse End*/}

          </div>{/*ProfileNavBody End*/}
          {/*<Divider inverted />*/}

            <div className="ClientContactList">
              <div className="Email">
                <div><Icon name="mail outline" /></div>
                <div>{this.props.email}</div>
              </div>
              <div className="Phone">
                <div><Icon name="phone"/></div>
                <div>{this.props.phone}</div>
              </div>
            </div>

        </Segment>

        <div className="ClientManagerList">
          <div className="Item ClientPreparer">
            <div className="ProfileImg" />
            <p className="Role">Preparer</p>
            <p className="Name">{this.props.preparer.name}</p>
            <p className="Company">in {this.props.taxPracticeCompany}</p>
          </div>
          <div className="Item ClientReviewer">
            <div className="ProfileImg" />
            <p className="Role">Reviewer</p>
            <p className="Name">{this.props.reviewer.name}</p>
            <p className="Company">in {this.props.taxPracticeCompany}</p>
          </div>
        </div>

        <div className="ClientServiceStartDate">
          Service has started <br/>from {this.props.serviceStartDate}
        </div>

      </div>
    )
  }
}
