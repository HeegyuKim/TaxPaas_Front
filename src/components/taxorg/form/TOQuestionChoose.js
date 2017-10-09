import React from 'react'
import { Input, Checkbox, Form, Radio } from 'semantic-ui-react'

export default class TOQuestionChoose extends React.Component {
  render() {
    return (
      <div className="TOQuestionChoose TOForm">
        <Form.Group>
          <Form.Field label={this.props.index + ". " + this.props.question} />
          {this.props.answers.map((answer, i) => {
            return (
              <Form.Field
                control={Radio}
                label={answer.label}
                />
            )
          })}
        </Form.Group>
      </div>
    )
  }
}
