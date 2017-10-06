import React from 'react'
import TOSection from './TOSection'
import TONavigator from './TONavigator'
import './TaxOrganizer.css'

export default class TaxOrganizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [
        {
          id:'section1',
          title: "Section1",
          forms: [
            {
              type: 'input',
              label: 'Name'
            },
            {
              type: 'question-yesno',
              label: 'Do you have ~~~??'
            },
            {
              type: 'question-choose',
              label: 'Do you have ~~~??',
              answers: [
                {label:'yes'},
                {label:'no'},
                {label:'wtf?'},
              ]
            },
            {
              type: 'file',
              label: 'Do you have ~~~??'
            },
            {
              type: 'filelist',
              label: 'Do you have ~~~??'
            },
          ]
        },

        {
          id:'section2',
          title: "Section2",
          forms: [
            {
              type: 'input',
              label: 'Name'
            },
            {
              type: 'question-yesno',
              label: 'Do you have ~~~??'
            },
            {
              type: 'question-choose',
              label: 'Do you have ~~~??',
              answers: [
                {label:'yes'},
                {label:'no'},
                {label:'wtf?'},
              ]
            },
            {
              type: 'file',
              label: 'Do you have ~~~??'
            },
            {
              type: 'filelist',
              label: 'Do you have ~~~??'
            },
          ]
        },


      ]
    }
  }
  render() {
    return (
      <div className="TaxOrganizer">
        <TONavigator
          sections={this.state.sections}
          />
        <ol className="TOContent">
          {this.state.sections.map((section, i) => {
            return (
              <TOSection
                id={section.id}
                title={section.title}
                forms={section.forms}
                />
            )
          })}
        </ol>
      </div>
    )
  }
}
