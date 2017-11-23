import React from 'react'
import {Segment} from 'semantic-ui-react'
import '../../stylesheets/StatisticsView.css'

class StatisticsItem extends React.Component {
  render() {
    return (
      <Segment className="StatisticsItem">
        <img />
        <div>{this.props.type}</div>
        <p>{this.props.numerator} / {this.props.denominator}</p>
      </Segment>
    )
  }
}
export default class StatisticsView extends React.Component {
  render() {
    return (
      <div className="StatisticsView">
        <div className="ClientAdd"></div>

        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <div className="partition"></div>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>

        <div className="StatisticsViewCloser"></div>
      </div>
    )
  }
}
