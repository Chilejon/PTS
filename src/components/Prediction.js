import React, { Component } from "react";

class Prediction extends Component {
  state = {
    team: this.props.team,
    pred: this.props.pred,
    zeroToEight: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
      { id: 6, value: 6 },
      { id: 7, value: 7 },
      { id: 8, value: 8 }
    ]
  };

  render() {
    return (
      <div>
        <label>{this.props.id}</label>
        <label>{this.props.hteam}</label>
        <select value={this.props.hpred}>
          {this.state.zeroToEight.map(dd => (
            <option key={dd.id} value={dd.id}>
              {dd.value}
            </option>
          ))}
        </select>
        <label> V </label>
        <label>{this.props.ateam}</label>
        <select value={this.props.apred}>
          {this.state.zeroToEight.map(dd => (
            <option key={dd.id} value={dd.id}>
              {dd.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default Prediction;
