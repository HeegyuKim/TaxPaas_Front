import React from 'react'
import Popup from "../../common/Popup"
import "./SendMailPopup.css"
import { Button, Icon } from 'semantic-ui-react'

export default class SendMailPopup extends Popup {
  state = {
    receivers: [],
    status: "ready"
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
  sendEmail() {
    this.setState({
      status: "sending"
    })
    this.setVisible(false)
    setTimeout(()=> {
      alert("Email is sended successfully.")

      this.setState({
        state: "ready"
      })
    }, 1000)
  }
  renderContent() {
    return (
      <div className="SendMailPopup Popup">
        <div className="SendMailContent" onClick={e => e.stopPropagation()}>

          <div className="SendMailTitleBar">
            <p>Send Email</p>
            <div className="CloseButton" name="close"
              onClick={e => this.setVisible(false)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.21 36.21" width="100%" height="100%"><title>close</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><line x1="0.35" y1="0.35" x2="35.85" y2="35.85"/><line x1="35.85" y1="0.35" x2="0.35" y2="35.85"/></g></g></svg>
            </div>
          </div>

          <div className="SendInfo">
            <div className="Row">
              <div className="Label">Title</div>
              <div className="Value"><input type="text" /></div>
            </div>
            <div className="Row">
              <div className="Label">To</div>
              <div className="Value"><input type="text" value={this.getReceiverEmails()} /></div>
            </div>
          </div>

          <div className="PartitionHorizon" />
          <textarea placeholder="Input text here..." className="MailContent" />
          <div className="PartitionHorizon" />
          <div className="BtnRow">
            <div className="MailSendBtn" onClick={this.sendEmail.bind(this)}>
              Send
            </div>
            <div className="AttachBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.03 36.34" width="100%" height="100%"><title>attach_file</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M37.13,1.9c-2.59-2.6-6.58-2.56-9.43.26Q18.7,11,9.83,20c-2.28,2.3-2.38,5.13-.38,7.06s4.54,1.82,7-.62c3.06-3,6.08-6.07,9.12-9.11,1.1-1.1,2.22-2.18,3.28-3.3l-1.37-1.31c-.18.19-.35.39-.53.57C23,17.25,19,21.19,15.11,25.16c-1.4,1.41-2.91,2-4.46.42s-.82-3,.48-4.25C17.09,15.38,23,9.4,29,3.49c2.24-2.21,4.86-2.2,6.82-.17s1.8,4.53-.3,6.65c-7.5,7.57-15,15.18-22.69,22.52a7.76,7.76,0,0,1-5.79,1.73c-5.26-.84-6.91-7-3.08-11,5.52-5.65,11.17-11.19,16.74-16.8.09-.09.17-.2.26-.3L19.66,4.9C13.94,10.59,8.18,16.24,2.57,22a8.25,8.25,0,0,0,0,12,8.36,8.36,0,0,0,11.83-.29Q25.7,22.62,36.83,11.33C39.68,8.45,39.73,4.51,37.13,1.9Z"/></g></g></svg>
            </div>
            <div className="AttachBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.4 34.4" width="100%" height="100%"><title>attach_img</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M30.46,4H31.7a2,2,0,0,1,2,2V31.7a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V30.39"/><polyline points="0.7 20.56 11.25 11.05 30.2 25.2"/><polyline points="18.2 16.2 22.05 12.85 30.46 19.49"/><circle cx="21.85" cy="6.55" r="2.7"/><rect x="0.7" y="0.7" width="29.69" height="29.69" rx="2" ry="2"/></g></g></svg>
            </div>
          </div>
        </div>
        <div className="MailTemplatesList">
          <div className="Template">Template A</div>
          <div className="Template">Template B</div>
          <div className="Template">Template C</div>
        </div>
      </div>
    )
  }
}
