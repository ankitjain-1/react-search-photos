import React, { Component } from "react";
import SearchBar from "./SearchBar";
class App extends Component {
  state = {
    searchTerm: "",
  };

  onSearchSubmit = (searchTerm) => {
    console.log(searchTerm);
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
