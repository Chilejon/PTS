import React, { Component } from "react";
import Predictions from "./Predictions";
import AllPredictions from "./components/AllPredictions";

class Home extends Component {
  state = {
    weekInfo: 
    [
      { weekNo: 1, weekDate: '01/01/2019', name: 'Jon Chiles', h1: 1, a1: 0, h2: 2, a2: 1, h3: 3, a3: 0, h4: 2, a4: 1, h5: 2, a5: 3 },
      { weekNo: 1, weekDate: '01/01/2019', name: 'Tony Blaikie', h1: 2, a1: 1, h2: 3, a2: 2, h3: 3, a3: 1, h4: 4, a4: 1, h5: 2, a5: 1 }
    ]
  };

  render() {
    return (
      <section>
          <Predictions />
          <section className="ptsFullTable">
          <table>
          {this.state.weekInfo.map(allPredictions => (
          <AllPredictions weekNo={allPredictions.weekNo} weekDate={allPredictions.weekDate} name={allPredictions.name}
          h1={allPredictions.h1} a1={allPredictions.a1}
          h2={allPredictions.h2} a2={allPredictions.a2}
          h3={allPredictions.h3} a3={allPredictions.a3}
          h4={allPredictions.h4} a4={allPredictions.a4}
          h5={allPredictions.h5} a5={allPredictions.a5}
          />
        ))}
        </table>
        </section>
      </section>
    );
  }
}

export default Home;
