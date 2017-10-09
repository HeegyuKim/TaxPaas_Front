import React from 'react'
import {Segment, Divider} from 'semantic-ui-react'
import './TONavigator.css'


export default class TONavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Segment className="TONavigator">
        <div className="Profile">
          <img className="ProfileImage" src="/img/profile.jpg" /><br/>
          <p className="ProfileName" >Donald J. Trump </p>
          <Divider horizontal className="TONavTitle">Tax Organizer</Divider>
        </div>
        <div className="NavSectionList">
          {this.props.sections.map((section, i) => {
            return (
              <div>
                <h4 className="NavSectionTitle">
                  <a href={"#" + section.id}>{(i+1) + ". " + section.title}</a>
                </h4>
              </div>
            )
          })}
        </div>
      </Segment>
    )
  }
}
