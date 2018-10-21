import React, { Component } from "react";
import Slider from "./components/Slider";

class Quiz extends Component {
  state = {
    slider: [
      { id: "A", team: "team A", score: "0" },
      { id: "B", team: "team B", score: "0" }
    ]
  };

  render() {
    return (
      <div>
        {this.state.slider.map(slider => (
          <section className="slider">
            <Slider id={slider.id} team={slider.team} score={slider.score} />
          </section>
        ))}
      </div>
    );
  }
}

export default Quiz;
