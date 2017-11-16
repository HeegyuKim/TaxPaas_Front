import React from 'react'
import TOForm from './TOForm'
import { Form, Button, Segment, Icon, Dimmer, Loader } from 'semantic-ui-react'

export default class TOSection extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    extended: this.props.index == 1? true : false,
    tryingAutoInput: false
  }
  onClickExtendButton(e) {
    this.setState({
      extended: !this.state.extended
    })
  }
  onClickTryAutoInput(e) {
    this.setState({
      tryingAutoInput: true
    })
  }
  createForm() {
    if(this.props.forms) {
      return this.props.forms.map((form, index) => {
        return (
          <TOForm
            index={index + 1}
            form={form}
            />
        )
      })
    }
  }
  render() {
    return (
      <div className="TOSection" id={this.props.id}>
        <Form>
          <Segment>
            <Segment>
              <tbody>
                <p className="SectionTitle">{this.props.index}. {this.props.title}</p>
                <Button className="SectionDropdown"
                  icon basic
                  size="large"
                  onClick={(e)=>this.onClickExtendButton(e)}
                  >
                  <Icon name={this.state.extended? "caret up":"dropdown"} />
                </Button>
              </tbody>
            </Segment>
            <div className="FormGroup"
              style= {{
                //visibility: this.state.extended? "visible" : "hidden",
                maxHeight: this.state.extended? "1000px":"0px"
              }}
              >
              { this.state.tryingAutoInput?
                <Dimmer active inverted>
                  <Loader inverted>Processing AutoInput</Loader>
                </Dimmer> : ""
              }

              {this.createForm()}

              <div style={{textAlign:"center"}}>
                <Button className="SaveButton" positive size="large">Save</Button>
                <Button secondary className="AutoInputButton" size="large"
                  onClick={(e)=>this.onClickTryAutoInput(e)}
                  >
                  Try AutoInput</Button>
              </div>
            </div>
          </Segment>
        </Form>
      </div>
    )
  }
}
