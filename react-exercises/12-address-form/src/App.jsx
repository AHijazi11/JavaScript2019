import React, { Component } from 'react';

import Address from './components/Address/Address';
import DisplayResults from './components/DisplayResults';

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    Country: "",
    Submitted : false
  }

  set = e => {this.setState({ [e.target.name]: e.target.value });}
  handleSubmit = e => {e.preventDefault(); this.setState({Submitted : true})}
  
  render() {
    return (
      <div className="App">
        <Address handleSubmit={this.handleSubmit} set={this.set} />
        <DisplayResults address = {this.state.firstName}/>
      </div>
    );
  }
  }
export default App;
