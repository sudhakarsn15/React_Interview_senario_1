import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  render() {
    return (
      <div>
        v<h2>Interview senario 1</h2>
        <p>
          1. Write a simple React class which fetches data from given api when
          page loads
        </p>
        <p>2. Storing fetched api to redux.</p>
        <p>3. Connet react and redux.</p>
        <p>4. Map fetch api and display in table format</p>
      </div>
    );
  }
}

export default connect()(App);
