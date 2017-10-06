import React from 'react'

export default class TONavigator extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="TONavigator">
        {this.props.sections.map((section, i) => {
          return (
            <div>
              <h4 className="NavSectionTitle">
                <a href={"#" + section.id}>{section.title}</a>
              </h4>
            </div>
          )
        })}
      </div>
    )
  }
}
