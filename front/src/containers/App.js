import React, { Component } from "react";
import From from "../components/From";
import NumberForm from "../components/NumberForm";
import Result from "../components/Result";
import ResultNumbers from "../components/ResultNumbers.js";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <From />
        <Result />
        <NumberForm />
        <ResultNumbers />
      </div>
    );
  }
}

export default App;
