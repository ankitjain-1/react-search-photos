import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends Component {
  state = {
    searchTerm: "",
    images: [],
  };

  onSearchSubmit = async (searchTerm) => {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/",
      {
        headers: {
          Authorization:
            "Client-ID vaM25Gzv_0bOcAhZoQuaFqVJ8Wmikr2q13Kd7tRl7v0",
        },
        params: {
          query: searchTerm,
        },
      }
    );
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar submit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
