import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      para: ""
    };
    this.renderParagraph = () => {
      this.setState({para: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})
    }
  }
  
  render() {
    return (
      <>
        <div id="main">
          <button onClick={this.renderParagraph} id="click"></button>
          <p id="para">{this.state.para}</p>
        </div>
      </>
    );
  }
}

export default App;
