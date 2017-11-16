import React from 'react'
import { Input, Checkbox } from 'semantic-ui-react'
import TOInputForm from './form/TOInputForm'
import TOQuestionChoose from './form/TOQuestionChoose'
import TOFileInput from './form/TOFileInput'
import TOFileListInput from './form/TOFileListInput'

export default class TOForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer_yesno : [
        {label:'yes'},
        {label:'no'},
      ]
    }
  }
  render() {
    if(this.props.form.type == "input") {
      return (
        <TOInputForm
          index={this.props.index}
          label={this.props.form.label}
          placeholder={this.props.form.placeholder}
          />
      )
    }
    else if(this.props.form.type == "question-yesno") {
      return (
        <TOQuestionChoose
          index={this.props.index}
          question={this.props.form.label}
          answers={this.state.answer_yesno}
          />
      )
    }
    else if(this.props.form.type == "question-choose") {
      return (
        <TOQuestionChoose
          index={this.props.index}
          question={this.props.form.label}
          answers={this.props.form.answers}
          />

      )
    }
    else if(this.props.form.type == "file") {
      return (
        <TOFileInput
          index={this.props.index}
          label={this.props.form.label}
          />
      )
    }
    else if(this.props.form.type == "filelist") {
      return (
        <TOFileListInput
          index={this.props.index}
          label={this.props.form.label}
          />
      )
    }
    else {
      return (
        <div>
          {this.props.form.id}<br/>
          {this.props.form.label}<br/>
          {this.props.form.type}<br/>
        </div>
      )
    }

  }
}
