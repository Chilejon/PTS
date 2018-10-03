import React, { Component } from "react";
import Predictions from "./Predictions";
import AllPredictions from "./components/AllPredictions";

class Home extends Component {
  state = {
    weekInfo: 
    [
      { weekNo: 1, weekDate: '01/01/2019' }
    ]
  };

  render() {
    return (
      <section>
          <Predictions />
          {this.state.weekInfo.map(allPredictions => (
          <AllPredictions weekNo={allPredictions.weekNo} weekDate={allPredictions.weekDate} />
        ))}
      </section>
    );
  }
}

export default Home;
