import React, { Component } from "react"
import FullDetails from "./FullDetails"

const imgSrc = "http://interactive.stockport.gov.uk/stockportimagearchive/SIA/thumbnails/"

class ImageDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.title,
      AccessionNo: this.props.AccessionNo,
      ImageDetails: {}
    };
  }
  
  getImage(event) {
    alert(event.title)
  }

  render() {

    var image = function(state) {
      return (
        <FullDetails title={state.title} description={state.description} area={state.area} AccessionNo={state.AccessionNo.trim()} classno={state.classno} dateofimage={state.dateofimage} />
      );
    };

    return (
        <section>
        <section className="imageBorder">
        <p>{this.state.title}</p> 
        <img src={imgSrc + this.state.AccessionNo + ".jpg"} text={this.state.title} />
        <button onClick={() => {this.getImage(this.state)}}>Bigger</button>
        </section>
        <section>
          {image}
          </section>
</section>
    );
  }
}
export default ImageDetails;
