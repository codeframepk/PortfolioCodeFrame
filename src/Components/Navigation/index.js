import React, { Component } from "react";
import Home from "../Home";
import Header from "../Home/Header"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactUs from "../Home/ContactUs"

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/contactus" exact component={ContactUs} />
        
      </Router>
    );
  }
}
