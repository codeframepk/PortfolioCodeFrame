import React, { Component } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Work from "../Home/WorkDisplay";

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Header />
        <Work />
        <Footer />
      </div>
    );
  }
}
