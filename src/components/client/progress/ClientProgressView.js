
import React from 'react'
import { Icon } from 'semantic-ui-react'
import ProgressButton from './ProgressButton'
import './ClientProgressView.css'
export default class ClientProgressView extends React.Component {
  render() {
    let progressList = []
    let level = Number(this.props.level)
    for(let i = 0; i < 6; ++i) {
      if(i < level)
        progressList.push("progressed")
      else if(i == level)
        progressList.push("progressing")
      else {
        progressList.push("unprogressed")
      }
    }
    return (
      <table className="ClientProgressView">
        <tbody>
          <tr>
            {progressList.map((progress, i) => {
              return (
                <ProgressButton
                  type={progress}
                  />
              )
            })}
          </tr>
        </tbody>
      </table>
    )
  }
}
