import React, { Component } from "react";
import IsUserLoggedIn from "./isUserLoggedIn";

class App extends Component {
  render() {
    const Users = [
      {name: 'Joanna',
       isUserLoggedIn: true},
       {name: 'Kevin',
       isUserLoggedIn: false},
       {name: 'Alice',
       isUserLoggedIn: true}
      // Complete me
    ];
    return (
      <div className="App">
        <IsUserLoggedIn Users={Users}/>
      </div>
    );
  }
}

export default App;
