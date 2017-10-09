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
        urls: [
          "/img/profile.jpg"
        ],
        cells: [
          {x1:10, y1:10, x2:150, y2: 50},
          {x1:170, y1:120, x2:350, y2: 250},
          {x1:200, y1:100, x2:250, y2: 150},
          {x1:300, y1:70, x2:550, y2: 250},
        ]
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

  onCheckedChange(index, checked) {
    this.setState({
      results: this.state.results.map((result, i)=> {
        if(i == index) {
          result.checked = checked
        }
        return result
      })
    })
  }
  onAllChecked(checked) {
    this.setState({
      results: this.state.results.map((result, i)=> {
        result.checked = checked
        return result
      })
    })
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
            onAllChecked={(checked)=>this.onAllChecked(checked)}
            onCheckedChange={(index, checked)=>this.onCheckedChange(index, checked)}
            results={this.state.results}
            />
        </div>
      </div>
    )
  }
}
