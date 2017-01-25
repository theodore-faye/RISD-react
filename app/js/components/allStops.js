import React from 'react';
import buildingInfo from '../../data/building-info.js';
import TourNav from './tourNav.js';

export default class AllStops extends React.Component {

  render() {
    const allStops = buildingInfo.map((building, i) =>
      <a key={i} onClick={this.props.tourStop}>
        <li data-building={i}>{building.name}</li>
      </a>
    )

    return (
      <div class="white-box relative col m6" id="tourInfo">
        <ul id="allStops">
          {allStops}
          <li id="back">
            <i class="material-icons">arrow_backward</i>
            <a onClick={this.props.back}>back</a>
          </li>
        </ul>
        <TourNav
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          allStops={this.props.allStops}
        />
      </div>
    )
  }
}