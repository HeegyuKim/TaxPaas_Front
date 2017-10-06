import React from 'react'
import '../../stylesheets/StatisticsView.css'

class StatisticsItem extends React.Component {
  render() {
    return (
      <li className="StatisticsItem">
        <img />
        <div>{this.props.type}</div>
        <p>{this.props.numerator} / {this.props.denominator}</p>
      </li>
    )
  }
}
export default class StatisticsView extends React.Component {
  render() {
    return (
      <div className="StatisticsView">
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
        <StatisticsItem type="TYPE" numerator="1" denominator="5"/>
      </div>
    )
  }
}
