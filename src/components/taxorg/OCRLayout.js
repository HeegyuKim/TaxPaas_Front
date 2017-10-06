import React from 'react'
import OCRSourceDocList from './OCRSourceDocList'
import OCRFileImageView from './OCRFileImageView'
import OCRAutoInputList from './OCRAutoInputList'
import './OCRLayout.css'


export default class OCRLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [
        { filename: "file1.pdf", status: "processing" },
        { filename: "file2.pdf", status: "waiting" },
        { filename: "file3.pdf", status: "complete" },
      ],
      showingFile: {

      },
      results: [
        {label:"Name", value:"1234", checked: false},
        {label:"Name", value:"1234", checked: false},
        {label:"Name", value:"Johnson", checked: false},
        {label:"Name", value:"Johnson", checked: false},
        {label:"Name", value:"Johnson", checked: false},
        {label:"Name", value:"Johnson", checked: false},
      ]
    }
  }

  render() {
    return (
      <div className="OCRLayout">
        <div>
          <OCRSourceDocList
            files={this.state.files}
            />
          <OCRFileImageView
            file={this.state.showingFile}
            />
          <OCRAutoInputList
            results={this.state.results}
            />
        </div>
      </div>
    )
  }
}
