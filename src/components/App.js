import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends Component {
  state = {
    searchTerm: "",
  };

  onSearchSubmit = (searchTerm) => {
    axios
      .get("https://api.unsplash.com/search/photos/", {
        headers: {
          Authorization:
            "Client-ID vaM25Gzv_0bOcAhZoQuaFqVJ8Wmikr2q13Kd7tRl7v0",
        },
        params: {
          query: searchTerm,
        },
      })
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar submit={this.onSearchSubmit} />
      </React.Fragment>
    );
  }
}

export default App;
