import React, { Component } from "react";
import ImageDetails from "./components/ImageDetails";


const API = "https://hn.algolia.com/api/v1/search?query=";
const API2 = "http://interactive.stockport.gov.uk/siarestapi/v1/Getareas";
const API3 = "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=3";
const API4 = "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTitle/?term=";

class SIA extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Data: []
    };
    this.searchTitle = this.searchTitle.bind(this);

  }

  searchTitle(e) {
    this.setState({Data: []})
    fetch(API4 + this.title.value)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Data: json
        });
      });

     e.preventDefault();
    this.title.value = ""
  }

 


render() {
    var images = this.state.Data.map(function(Data) {
      return (
        <ImageDetails title={Data.title} AccessionNo={Data.AccessionNo.trim()} />
      );
    });

    

    return (
      <section>
        <section className="searchBorder">
          <form onSubmit={this.searchTitle}>
            <p>Search a title</p>
            <label>Title:</label>
            <input
              id="title"
              ref={title => (this.title = title)}
              required
            />
            <button type="submit">search</button>
          </form>
          </section>
          <section>{images}</section>
      </section>
    );
  }
}

export default SIA;