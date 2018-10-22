import React, { Component } from "react";
import Slider from "./components/Slider";

class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slider: [],
      showForm: false
    };
    this.addTeam = this.addTeam.bind(this);
  }

  addTeam(e) {
    var newArray = this.state.slider.slice();
    newArray.push({
      id: this.teamName.value,
      team: this.teamName.value,
      score: "0"
    });
    this.setState({ slider: newArray });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTeam}>
          <div>
            <p>Enter a team</p>
            <label>Team name</label>
            <input
              id="teamName"
              ref={teamName => (this.teamName = teamName)}
              required
            />
            <button type="submit">add</button>
          </div>
        </form>

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
