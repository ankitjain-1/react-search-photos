import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "../styles/App.css";
class App extends Component {
  state = {
    searchTerm: "",
    loadingJSON: false,
    loadingImage: false,
    images: [],
  };

  getImageRandomOrder = () => {
    const order = Math.ceil((Math.random() * 10) % 3) - 1;
    const orderList = ["latest", "oldest", "popular"];
    console.log(orderList[order]);
    return orderList[order];
  };

  onSearchSubmit = async (searchTerm) => {
    this.setState({ loadingJSON: true, loadingImage: true });
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/",
      {
        headers: {
          Authorization:
            "Client-ID vaM25Gzv_0bOcAhZoQuaFqVJ8Wmikr2q13Kd7tRl7v0",
        },
        params: {
          query: searchTerm,
          per_page: 30,
          order_by: this.getImageRandomOrder(),
        },
      }
    );
    console.log(response.data.results);
    this.setState({ images: response.data.results, loadingJSON: false });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar submit={this.onSearchSubmit} />
        {this.state.loadingJSON ? (
          <div class="loader">
            <div class="ui active dimmer inverted">
              <div class="ui text large loader">Loading</div>
            </div>
            <p></p>
          </div>
        ) : (
          <ImageList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
