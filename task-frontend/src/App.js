import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  //constructor(props) {
    //super(props)
  //}

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
