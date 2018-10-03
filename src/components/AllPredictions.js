import React, { Component } from "react";

class AllPredictions extends Component {
  state = {
    weekNo : this.props.weekNo,
    weekDate : this.props.weekDate
  };

  

  render() {
    console.log('props', this.props)
    return (
      <section className="ptsFullTable">

        <label>Week No: {this.props.weekNo} Date: {this.props.weekDate}</label>
      </section>
    );
  }
}
export default AllPredictions;
