import React, { Component } from "react";
import Prediction from "./components/Prediction";

class Predictions extends Component {
  state = {
    predictions: [
      { id: 1, hteam: "Man utd", hpred: 2, ateam: "Bournmouth", apred: 1 },
      { id: 2, hteam: "Liverpool", hpred: 3, ateam: "Birmingham", apred: 1 },
      { id: 3, hteam: "Man city", hpred: 1, ateam: "Brighton", apred: 1 },
      { id: 4, hteam: "West Ham", hpred: 2, ateam: "Bristol city", apred: 1 },
      { id: 5, hteam: "Arsenal", hpred: 1, ateam: "Macc town", apred: 1 }
    ]
  };

  render() {
    return (
      <section className="ptsPredictions">
        {this.state.predictions.map(predictions => (
          <Prediction
            hteam={predictions.hteam}
            id={predictions.id}
            hpred={predictions.hpred}
            ateam={predictions.ateam}
            apred={predictions.apred}
          />
        ))}
      </section>
    );
  }
}

export default Predictions;
