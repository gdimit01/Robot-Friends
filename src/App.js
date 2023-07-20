import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

/* This code defines a class called `App` that extends the `Component` class from the React library.
The `constructor` method is used to initialize the state of the `App` component. */
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  /**
   * Handles the change event when the search input value is modified.
   *
   * @param {Event} event - The change event.
   */
  onSearchChange(event) {
    console.log(event.target.value);
  }

  /**
   * Renders the Robot Friends component.
   *
   * @return {JSX.Element} The rendered Robot Friends component.
   */
  render() {
    return (
      <div className="tc">
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
