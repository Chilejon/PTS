import React, { Component } from "react"


const imgSrc = "http://interactive.stockport.gov.uk/stockportimagearchive/SIA/thumbnails/"

class ImageDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.title,
      AccessionNo: this.props.AccessionNo,
      ImageDetails: {}
    }
  }
  

  render() {

    return (
        <section>
        <section className="imageBorder">
        <p>{this.state.title}</p> 
        <img src={imgSrc + this.state.AccessionNo + ".jpg"} text={this.state.title} />
        <button onClick={() => {this.props.getImage(this.state.AccessionNo)}}>Bigger</button>
        </section>
        
</section>
    );
  }
}
export default ImageDetails;
