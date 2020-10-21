import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      para: ""
    };
  }
  renderParagraph = () => {
    this.setState({
      para:
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
    });
  };
  render() {
    return (
      <>
        <div id="main">{/* Do not remove this main div!! */}</div>
        <button onClick={this.renderParagraph} id="click"></button>
        {this.state.para}
      </>
    );
  }
}

export default App;
