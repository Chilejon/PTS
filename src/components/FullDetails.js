import React, { Component } from "react";

const imgSrc = "http://interactive.stockport.gov.uk/stockportimagearchive/SIA/"

class FullDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      area: this.props.area,
      AccessionNo: this.props.AccessionNo,
      classno: this.props.classno,
      dateofimage: this.dateofimage
    };
  }

  render() {
    return (
        <section className="bigImageBorder">
        <h2>{this.state.title}</h2> 
        <p>
        {this.state.description}
        </p>
        <p>{this.state.AccessionNo} : {this.state.area} : {this.state.classno}</p>
        <p>
        {this.state.dateofimage}
        </p>
        <img src={imgSrc + this.state.AccessionNo + ".jpg"} text={this.state.title} />
        </section>
    );
  }
}
export default FullDetails;
