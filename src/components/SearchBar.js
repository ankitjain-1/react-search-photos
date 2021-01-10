import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.props.submit(this.state.term);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(event) => this.formSubmitHandler(event)}>
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => this.setState({ term: event.target.value })}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
