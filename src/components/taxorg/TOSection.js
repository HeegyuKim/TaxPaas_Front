import React from 'react'
import TOForm from './TOForm'

export default class TOSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="TOSection" id={this.props.id}>
        <h1 className="SectionTitle">{this.props.title}</h1>
        {this.props.forms.map((form, i) => {
          return (
            <TOForm
              form={form}
              />
          )
        })}
      </div>
    )
  }
}
