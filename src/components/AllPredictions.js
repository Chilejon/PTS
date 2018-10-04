import React, { Component } from "react";

class AllPredictions extends Component {
  state = {
    weekNo : this.props.weekNo,
    weekDate : this.props.weekDate,
    name: this.props.name,
    h1: this.props.h1,
    a1: this.props.a1,
    h2: this.props.h2,
    a2: this.props.a2,
    h3: this.props.h3,
    a3: this.props.a3,
    h4: this.props.h4,
    a4: this.props.a4,
    h5: this.props.h5,
    a5: this.props.a5
  };

  

  render() {
    console.log('props', this.props)
    return (
 
        <tr><td>{this.props.name}</td>
        <td>{this.props.h1}</td><td>{this.props.a1}</td>
        <td>{this.props.h2}</td><td>{this.props.a2}</td>
        <td>{this.props.h3}</td><td>{this.props.a3}</td>
        <td>{this.props.h4}</td><td>{this.props.a4}</td>
        <td>{this.props.h5}</td><td>{this.props.a5}</td></tr>
    );
  }
}
export default AllPredictions;
