import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
    document.querySelector("#searchBar").blur();
  };

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.formSubmitHandler(event)}
        >
          <label className="ui label large" htmlFor="searchBar">
            Search Image
          </label>
          <input
            autoFocus
            className="ui input"
            id="searchBar"
            type="text"
            placeholder='Search "Dogs"'
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
