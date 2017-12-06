import React from 'react'
import TOSection from './TOSection'
import TONavigator from './TONavigator'
import './TaxOrganizer.css'

import {TaxOrganizerForm} from './TaxOrganizerData'

export default class TaxOrganizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections_temp: [
        {
          id:'section1',
          title: "Section1",
          type: "section",
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
          type:"section",
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
          id:'section-files',
          title: "Attaching Files",
          type: "section_list",
          sections: [

          ],
          forms: []
        }
      ]
    }
  }
  createSection(section, i) {
    if(section.type == "section") {
      return (
        <TOSection
          id={section.id}
          index={i + 1}
          title={section.title}
          forms={section.forms}
          />
      )
    }
    else if(section.type == "section_list"){
      return (
        <div>
          {section.sections.map((subsection, i2) => {
            return (
              <TOSection
                id={subsection.id}
                index={i + 1 + 0.1 * i2}
                title={subsection.title}
                forms={subsection.forms}
                />
              )
          })}
        </div>
      )
    }
  }
  render() {
    return (
      <div className="TaxOrganizer">
        <TONavigator
          sections={TaxOrganizerForm}
          />
        <div className="TOContent">
          {TaxOrganizerForm.map((section, i) => {
            return this.createSection(section, i)
          })}
        </div>
      </div>
    )
  }
}
