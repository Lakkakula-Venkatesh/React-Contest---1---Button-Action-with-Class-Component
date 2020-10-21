import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.renderParagraph = this.state.renderParagraph;
  }
  renderParagraph() {
    return (
      <>
        <p>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      </>
    );
  }
  render() {
    return (
      <>
        <div id="main">{/* Do not remove this main div!! */}</div>
        <button onClick={this.state.renderParagraph}>
          {this.renderParagraph}
        </button>
      </>
    );
  }
}

export default App;
