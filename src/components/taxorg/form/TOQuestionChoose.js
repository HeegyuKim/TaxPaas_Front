import React from 'react'
import { Input, Checkbox } from 'semantic-ui-react'

export default class TOQuestionChoose extends React.Component {
  render() {
    return (
      <li className="TOQuestionChoose TOForm">
        <p>{this.props.question}</p>
        <ul>
          {this.props.answers.map((answer, i) => {
            return (
              <Checkbox
                label={answer.label}
                />
            )
          })}
        </ul>
      </li>
    )
  }
}
