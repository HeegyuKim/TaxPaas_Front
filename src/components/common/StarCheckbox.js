import React from 'react'
import { Icon } from 'semantic-ui-react'

export class StarCheckbox extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Icon
        className="StarCheckbox"
        {...this.props}
        name={this.props.checked? "star":"empty star"}
        color={this.props.checked? (this.props.color || "black") : "black"}

        />
    )
  }
}
