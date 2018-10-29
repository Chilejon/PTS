import React, { Component } from "react";
import ImageDetails from "./components/ImageDetails";
import FullDetails from "./components/FullDetails";

const getAreas = "http://interactive.stockport.gov.uk/siarestapi/v1/Getareas";
const API3 =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=3";
const GetPhotosSearchTitle =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTitle/?term=";
const GetPhotoByID =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByID?id=";
const GetPhotosSearchAll =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTerm?term=";
const GetPhotosByTermAndArea =
  "http://interactive.stockport.gov.uk/siarestapi/v1/GetPhotosByTermArea/?term=";

class SIA extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Images: [],
      Areas: [],
      imageDetails: {
        title: ""
      },
      searchTerm: "",
      searchWhat: [
        { id: "title", value: "Title" },
        { id: "all", value: "All" },
        { id: "allarea", value: "All/Area" }
      ]
    };
    this.searchTitle = this.searchTitle.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    fetch(getAreas)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Areas: json
        });
      });
  }

  searchTitle(e) {
    this.setState({ Images: [] });
    var apiLink = "";
    switch (this.searchWhat.value) {
      case "all":
        apiLink = GetPhotosSearchAll + this.title.value;
        break;
      case "title":
        apiLink = GetPhotosSearchTitle + this.title.value;
        break;
      case "allarea":
        apiLink =
          GetPhotosByTermAndArea +
          this.title.value +
          "&area=" +
          this.Areas.value;
        break;
    }

    //var apiLink = GetPhotosSearchTitle;
    //if (this.searchWhat.value === "all") {
    //  apiLink = GetPhotosSearchAll;
    //}
    //alert(this.searchWhat.value);
    fetch(apiLink)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Images: json
        });
      });
    this.setState(
      (this.state.imageDetails = {
        title: ""
      })
    );
    this.setState({ searchTerm: this.title.value });
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
    if (this.state.Images !== null) {
      var images = this.state.Images.map(Images => {
        return (
          <ImageDetails
            title={Images.title}
            AccessionNo={Images.AccessionNo.trim()}
            getImage={this.getImage}
          />
        );
      });
    } else {
      <section>No results</section>;
    }

    return (
      <section className="wrapper">
        <section>
          <section className="searchBorder">
            <form onSubmit={this.searchTitle}>
              <p>Search a title</p>
              <label>Title:</label>
              <input id="title" ref={title => (this.title = title)} required />
              <select id="searchWhat" ref={input => (this.searchWhat = input)}>
                {this.state.searchWhat.map(dd => (
                  <option key={dd.id} value={dd.id}>
                    {dd.value}
                  </option>
                ))}
              </select>
              <select id="Areas" ref={input => (this.Areas = input)}>
                {this.state.Areas.map(dd => (
                  <option key={dd.ID} value={dd.ID}>
                    {dd.Area1}
                  </option>
                ))}
              </select>
              <button type="submit">search</button>
            </form>
          </section>

          <section className="section left">
            {this.state.Images !== null && (
              <section>Image count: {this.state.Images.length} </section>
            )}

            {this.state.Images === null && (
              <section>No images found for {this.state.searchTerm}</section>
            )}

            <section>{images}</section>
          </section>
        </section>
        <section className="section right">
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
      </section>
    );
  }
}

export default SIA;
