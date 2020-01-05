import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {response: "dummy"};

  componentDidMount() {
    this.RenderApi();
  }

  RenderApi = () => {
    fetch("http://192.168.0.49:3000/api/v1", {
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(resp => {
        console.log("the result string:", resp);
      })
      .catch(error =>  console.error("response is null", error))
  }
  
  render() {
  return (
    <div className="App">
      <h1>POC for JWT</h1>
    </div>
    );
  }
}

export default App;