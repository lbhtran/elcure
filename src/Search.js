import React, { Component } from 'react';
import './Search.css';


class Search extends Component {
  componentDidMount() {
    // Focus the input and select "world"
    this.input.focus()
    this.input.setSelectionRange(6, 11)
  }
  render() {
    return (
      <Autocomplete
        ref={el => this.input = el}
        value="hello world"
        ...
      />
    )
  }
}

export default Search;
