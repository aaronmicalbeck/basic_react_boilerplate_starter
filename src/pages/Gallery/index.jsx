import React, { Component } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
import "./style.css";


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
      return (
        <div className="">
            {/* <Header/> */}
            <p>THIS IS THE GALLERY</p>
            {/* <Footer/> */}
            <Link to="/" className="nav-link">
            <button>CLICK HERE TO GO HOME</button>
            </Link>
        </div>
      );
    }


}
