import React, { Component } from "react";
import "./Address.css";
import countries from "../../assets/countries";
import states from '../../assets/states'

class Address extends Component {
  state = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    Country: "",
    Submitted : false
  };

  setfirstName = e => {this.setState({firstName : e.target.value})}
  setlastName = e => {this.setState({lastName : e.target.value})}
  setaddressLine1 = e => {this.setState({addressLine1 : e.target.value})}
  setcity = e => {this.setState({city : e.target.value})}
  setstate = e => {this.setState({state : e.target.value})} 
  setpostalcode = e => {this.setState({postalCode : e.target.value})}
  setCountry = e => {this.setState({Country : e.target.value})}
  handleSubmit = e => {e.preventDefault(); this.setState({Submitted : true})}


  render() {
    console.log(countries)
    return (
      <form className="container mt-4" onSubmit = {this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="control-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            value = {this.state.firstName}
            onChange = {this.setfirstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="control-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            value = {this.state.lastName}
            onChange = {this.setlastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine1" className="control-label">
            Address Line 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            type="text"
            className="form-control"
            value = {this.state.addressLine1}
            onChange = {this.setaddressLine1}
          />
          <p className="help-block text-muted">
            Street address, P.O. box, company name, c/o
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="control-label">
            City / Town
          </label>
          <input id="city" name="city" type="text" className="form-control" 
          value = {this.state.city}
          onChange = {this.setcity}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="control-label">
            State / Province / Region
          </label>
          <select id="state" name="state" className="form-control"  
          value = {this.state.state} 
          onChange = {this.setstate}>
          {
            states.map((state,idx) => {
              return (
              <option>{state}</option>
              )
              })
              }
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postalCode" className="control-label">
            Zip / Postal Code
          </label>
          <input
            id="postalCode"
            name="postalCode"
            type="text"
            className="form-control"
            value = {this.state.postalCode}
            onChange = {this.setpostalcode}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country" className="control-label">
            Country
          </label>
          <select id="country" name="country" className="form-control"
          value = {this.state.country}
          onChange = {this.setCountry} >
          {
            countries.map((country,idx) => {
              return (
                <option>{country}</option>
              )
            })
          }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/*
         * Find a way to only display this once the form has been submitted.
         * Hint: You will need to change this "this.condtion" below to something else
         */}
        {this.state.Submitted && (
          <div className="card card-body bg-light mt-4 mb-4">
            Results:
            <ul className="list-unstyled mb-0">
              <li>{this.state.firstName}</li>
              <li>{this.state.lastName}</li>
              <li>{this.state.addressLine1}</li>
              <li>{this.state.city}</li>
              <li>{this.state.state}</li>
              <li>{this.state.postalCode}</li>
              <li>{this.state.Country}</li>
            </ul>
          </div>
        )}
      </form>
    );
  }
}

export default Address;
