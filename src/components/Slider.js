import React, { Component } from "react";

class Slider extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    team: this.props.team,
    score: this.props.score
  };

  this.moveTokenBack = this.moveTokenBack.bind(this)
  this.moveTokenForward = this.moveTokenForward.bind(this)

    }

    componentDidMount() {
      var score = parseInt(this.state.score)
      if(score > 0){
      var tokenLocation = score
      document.getElementById(tokenLocation).className = "token"
      }
      if(score === 0){
        
        var tokenLocation = score
        document.getElementById(tokenLocation).className = "token"
        }
        if(score < 0){
          var tokenLocation = score
          document.getElementById(tokenLocation).className = "token"
          }
            
    }

    moveTokenBack(event) {
      score = this.state.score
      var score = parseInt(this.state.score)
      
      if(score < 0)
      {
        document.getElementById(score).className = "minus"
      }
      if(score === 0)
      {
        document.getElementById(score).className = "even"
      }
      if(score > 0)
      {
        document.getElementById(score).className = "plus"
      }

      score = score - 1;
      this.setState({score: score})

      document.getElementById(score).className = "token"
    }

    moveTokenForward(event) {
      score = this.state.score
      var score = parseInt(this.state.score)
      
      if(score < 0)
      {
        document.getElementById(score).className = "minus"
      }
      if(score === 0)
      {
        document.getElementById(score).className = "even"
      }
      if(score > 0)
      {
        document.getElementById(score).className = "plus"
      }

      score = score + 1;
      this.setState({score: score})

      document.getElementById(score).className = "token"
    }


   

  render() {
    console.log('props', this.props)
    return (
        <table className="sliderTable" id={this.props.id}>
        <tr><th>{this.props.team}</th></tr>
        <button onClick={this.moveTokenBack}>Minus</button>
        <tr><td>Minus</td></tr>
        <tr id="-8" className="minus"><td>-8</td></tr>
        <tr id="-7" className="minus"><td>-7</td></tr>
        <tr id="-6" className="minus"><td>-6</td></tr>
        <tr id="-5" className="minus"><td>-5</td></tr>
        <tr id="-4" className="minus"><td>-4</td></tr>
        <tr id="-3" className="minus"><td>-3</td></tr>
        <tr id="-2" className="minus"><td>-2</td></tr>
        <tr id="-1" className="minus"><td>-1</td></tr>
        <tr id="0" className="even"><td>0</td></tr>
        <tr id="1" className="plus"><td>+1</td></tr>
        <tr id="2" className="plus"><td>+2</td></tr>
        <tr id="3" className="plus"><td>+3</td></tr>
        <tr id="4" className="plus"><td>+4</td></tr>
        <tr id="5" className="plus"><td>+5</td></tr>
        <tr id="6" className="plus"><td>+6</td></tr>
        <tr id="7" className="plus"><td>+7</td></tr>
        <tr id="8" className="plus"><td>+8</td></tr>
        <tr><td>Plus</td></tr>
        <button onClick={this.moveTokenForward}>Plus</button>
        <tr><td>{this.state.score}</td></tr>
        </table>

        
    );
  }
}
export default Slider;
