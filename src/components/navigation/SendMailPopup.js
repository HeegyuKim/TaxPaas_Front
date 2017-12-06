import React from 'react'
import Popup from "../../common/Popup"
import "./SendMailPopup.css"
import { Button, Icon } from 'semantic-ui-react'

export default class SendMailPopup extends Popup {
  state = {
    receivers: []
  }
  open(receivers) {
    this.setVisible(true)
    this.setState({
      receivers: receivers
    })
  }
  getReceiverEmails() {
    return this.state.receivers.map((item, i) => {
      return item.name
    }).join(",")
  }
  renderContent() {
    return (
      <div className="SendMailPopup Popup">
        <div className="SendMailContent" onClick={e => e.stopPropagation()}>
          <h3 className="SendMailTitleBar">
            Send Email
            <Icon className="CloseButton" name="close" size="large"/>
          </h3>
          <hr/>
          <table>
            <tr className="Row">
              <td className="Label">Title</td>
              <td className="Value"><input type="text" /></td>
            </tr>
            <tr className="Row">
              <td className="Label">To</td>
              <td className="Value"><input type="text" value={this.getReceiverEmails()} /></td>
            </tr>
            <tr className="Row">
              <td className="Label">Text</td>
            </tr>
          </table>
          <textarea className="MailContent">
          </textarea>
          <Button primary fluid>
            Send
          </Button>
        </div>
      </div>
    )
  }
}
