import React, { Component } from "react";
import ImageDetails from "./components/ImageDetails";
import FullDetails from "./components/FullDetails";

const API = "https://hn.algolia.com/api/v1/search?query=";
const API2 = "http://interactive.stockport.gov.uk/siarestapi/v1/Getareas";
const API3 =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=3";
const API4 =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTitle/?term=";
const GetPhotoByID =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=";

class SIA extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Data: [],
      imageDetails: {
        title: ""
      },
      imageCount: 0
    };
    this.searchTitle = this.searchTitle.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  searchTitle(e) {
    this.setState({ Data: [] });
    fetch(API4 + this.title.value)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Data: json
        });
      });
    this.setState(
      (this.state.imageDetails = {
        title: ""
      })
    );
    e.preventDefault();
    this.title.value = "";
  }

  getImage(event) {
    fetch(GetPhotoByID + event.trim())
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          imageDetails: json
        });
      });
  }

  render() {
    var images = this.state.Data.map(Data => {
      return (
        <ImageDetails
          title={Data.title}
          AccessionNo={Data.AccessionNo.trim()}
          getImage={this.getImage}
        />
      );
    });

    return (
      <section>
        <section className="searchBorder">
          <form onSubmit={this.searchTitle}>
            <p>Search a title</p>
            <label>Title:</label>
            <input id="title" ref={title => (this.title = title)} required />
            <button type="submit">search</button>
          </form>
        </section>
        <section>Image count: {this.state.Data.length} </section>
        <section>{images}</section>

        {this.state.imageDetails.title !== "" && (
          <section>
            <FullDetails
              title={this.state.imageDetails.title}
              description={this.state.imageDetails.description}
              area={this.state.imageDetails.area}
              AccessionNo={this.state.imageDetails.AccessionNo.trim()}
              classno={this.state.imageDetails.classno}
              dateofimage={this.state.imageDetails.dateofimage}
            />
          </section>
        )}
      </section>
    );
  }
}

export default SIA;
