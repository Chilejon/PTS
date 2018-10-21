import React, { Component } from "react";
import Predictions from "./Predictions";
import AllPredictions from "./components/AllPredictions";
import Slider from "./components/Slider";

const API = "https://hn.algolia.com/api/v1/search?query=";
const API2 = "http://interactive.stockport.gov.uk/siarestapi/v1/Getareas";
const API3 =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=3";
const API4 =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTitle/?term=pineapple";

const DEFAULT_QUERY = "redux";
const DEFAULT_QUERY2 = "";

class Home extends Component {
  state = {
    weekInfo: [
      {
        weekNo: 1,
        weekDate: "01/01/2019",
        name: "Jon Chiles",
        h1: 1,
        a1: 0,
        h2: 2,
        a2: 1,
        h3: 3,
        a3: 0,
        h4: 2,
        a4: 1,
        h5: 2,
        a5: 3
      },
      {
        weekNo: 1,
        weekDate: "01/01/2019",
        name: "Tony Blaikie",
        h1: 2,
        a1: 1,
        h2: 3,
        a2: 2,
        h3: 3,
        a3: 1,
        h4: 4,
        a4: 1,
        h5: 2,
        a5: 1
      }
    ],
    data: [],
    data2: [],
    photo: {}
  };

  componentDidMount() {
    fetch(API2)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data: json
        });
      });

    fetch(API4)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          data2: json
        });
      });
  }

  render() {
    var canvases = this.state.data.map(function(data) {
      return (
        <section id={data.ID}>
          {data.ID} : {data.Area1}
        </section>
      );
    });

    var canvases2 = this.state.data2.map(function(data2) {
      return (
        <li>
          {data2.title} : {data2.description}
        </li>
      );
    });

    return (
      <section>
        <Predictions />
        <section className="ptsFullTable">
          <table>
            {this.state.weekInfo.map(allPredictions => (
              <AllPredictions
                weekNo={allPredictions.weekNo}
                weekDate={allPredictions.weekDate}
                name={allPredictions.name}
                h1={allPredictions.h1}
                a1={allPredictions.a1}
                h2={allPredictions.h2}
                a2={allPredictions.a2}
                h3={allPredictions.h3}
                a3={allPredictions.a3}
                h4={allPredictions.h4}
                a4={allPredictions.a4}
                h5={allPredictions.h5}
                a5={allPredictions.a5}
              />
            ))}
          </table>
        </section>
        <section className="slider">
          <Slider id="A" team="Team A" score="-4" />
        </section>
        <section className="slider">
          <Slider id="B" team="Team B" score="-2" />
        </section>
      </section>
    );
  }
}

export default Home;
