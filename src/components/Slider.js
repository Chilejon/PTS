import React, { Component } from "react";

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    team: this.props.team,
    score: this.props.score
  };

  this.minusClick = this.minusClick.bind(this);
  this.plussClick = this.plusClick.bind(this);
    }

    minusClick(event) {
      score = this.state.score
      alert(score)
      var score = parseInt(this.state.score)

      score = score - 1;
      alert(score)
      this.setState({score: score})

    }

    plusClick(event) {
      alert("+1");
    }

    



  render() {
    console.log('props', this.props)
    return (
        <table className="sliderTable">
        <tr><th>{this.props.team}</th></tr>
        <button onClick={this.minusClick}>Minus</button>
        <tr><td>Minus</td></tr>
        <tr className="minus"><td>-8</td></tr>
        <tr className="minus"><td>-7</td></tr>
        <tr className="minus"><td>-6</td></tr>
        <tr className="minus"><td>-5</td></tr>
        <tr className="minus"><td>-4</td></tr>
        <tr className="minus"><td>-3</td></tr>
        <tr className="minus"><td>-2</td></tr>
        <tr className="minus"><td>-1</td></tr>
        <tr className="even"><td>0</td></tr>
        <tr className="plus"><td>+1</td></tr>
        <tr className="plus"><td>+2</td></tr>
        <tr className="plus"><td>+3</td></tr>
        <tr className="token"><td>+4</td></tr>
        <tr className="plus"><td>+5</td></tr>
        <tr className="plus"><td>+6</td></tr>
        <tr className="plus"><td>+7</td></tr>
        <tr className="plus"><td>+8</td></tr>
        <tr><td>Plus</td></tr>
        <button onClick={this.plusClick}>Plus</button>
        </table>
    );
  }
}
export default Slider;
