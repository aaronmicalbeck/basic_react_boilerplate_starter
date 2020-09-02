import React, { Component } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import "./style.css";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
      return (
        <div className="">
            {/* <Header/> */}
            <p>THIS IS THE HOME PAGE</p>
            {/* <Footer/> */}
            <button>CLICK HERE FOR GALLERY</button>
        </div>
      );
    }


}

