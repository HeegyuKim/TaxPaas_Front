import React from 'react'
import OCRSourceDocList from './OCRSourceDocList'
import OCRFileImageView from './OCRFileImageView'
import OCRAutoInputList from './OCRAutoInputList'
import './OCRLayout.css'
import Axios from '../common/Axios'
import axios from 'axios'


export default class OCRLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [
        // { filename: "file1.pdf", status: "processing" },
        // { filename: "file2.pdf", status: "waiting" },
        // { filename: "file3.pdf", status: "complete" },
      ],
      showingFile: {
        category: 'w2',
        order: 1,
        docOrder: 1,
        docName: "",
        images: [
          { src: "", width: 800, height: 600 }
        ]
      },
      results: [],
      highlightAreaList: [],
      allChecked: false,
    }
  }

  componentDidMount() {
      Axios.get("/auto/source_doc/")
        .then((response)=> {
          console.log("response", response);
          let data = response.data
          let sourceDocList = []

          files: response.data.map((doc, i) => {
            let category = doc['category']
            let docOrder = doc['doc_order']
            doc['w2_list'].map((w2, i) => {
              sourceDocList.push({
                filename: "W-2 " + category + "-" + docOrder + "-" + w2['order'],
                id: w2['id'],
                status: "complete",
                type: "w2",
                typeLabel: "W-2 Wage"
              })
            })
            doc['ten99div_list'].map((div, i) => {
              sourceDocList.push({
                filename: "1099 DIV " + category + "-" + docOrder + "-" + div['order'],
                id: div['id'],
                status: "complete",
                type: 'div',
                typeLabel: "1099 DIV"
              })
            })
            doc['ten99int_list'].map((div, i) => {
              sourceDocList.push({
                filename: "1099 INT " + category + "-" + docOrder + "-" + div['order'],
                id: div['id'],
                status: "complete",
                type: 'int',
                typeLabel: "1099 INT"
              })
            })
          })
          this.setState({
            files: sourceDocList
          })
          this.onShowSourceDoc(sourceDocList[0].id)
        })
        .catch((err)=> {
          console.log("Cannot get the source doc list.", err);
        })
  }

  onShowSourceDoc(doc) {
    Axios.get('/auto/'+ doc.type + '/' + doc.id + '/')
      .then((res) => {
        console.log("onShowSourceDoc", res);

        let results = Array()
        if(res.data.results.status) {
          alert("AutoInput is now processing...")
        }
        else {
          this.setState({
            showingFile: {
              images: [
                { src: res.data.img, width: 800, height: 600 }
              ],
              category: doc.type,
              order: res.data.order,
              docOrder: res.data.source_doc,
              docName: doc.typeLabel
            },
            results: res.data.results,
            highlightAreaList: []
          })
          this.onAllChecked(true)
        }

      })
      .catch((err) => {
        console.log("onShowSourceDoc Error", err);
      })
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
  onValueChanged(index, value) {
    console.log("onValueChanged " + index + " " + value)
    this.setState({
      results: this.state.results.map((result, i) => {
        if(i == index) {
          result.value = value
        }
        return result
      })
    })
  }

  onAllChecked(checked) {
    this.setState({
      allChecked: checked,
      results: this.state.results.map((result, i)=> {
        result.checked = checked
        return result
      })
    })
  }

  onSourceDocSelected(pk) {
    Axios.get('/auto/w2/' + pk)
      .then((res)=>{
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  setHighlightAreas(areas) {
    this.setState({
      highlightAreaList: areas
    })
  }

  onConfirm() {
    console.log("confirm!");
    alert("Saved")
  }

  render() {
    return (
      <div className="OCRLayout">
        <OCRSourceDocList
          files={this.state.files}
          onShowSourceDoc={this.onShowSourceDoc.bind(this)}
          />
        <OCRFileImageView
          file={this.state.showingFile}
          highlightAreaList={this.state.highlightAreaList}
          />
        <OCRAutoInputList
          onAllChecked={(checked)=>this.onAllChecked(checked)}
          onCheckedChange={(index, checked)=>this.onCheckedChange(index, checked)}
          onValueChanged={(index, value)=>this.onValueChanged(index, value)}
          setHighlightAreas={(areas)=>this.setHighlightAreas(areas)}
          results={this.state.results}
          allChecked={this.state.allChecked}
          onConfirm={()=>this.onConfirm()}
          />
      </div>
    )
  }
}
