import React, { Component } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import {Link} from "react-router-dom";
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
            <Link to="/gallery" className="nav-link">
            <button>CLICK HERE FOR GALLERY</button>
            </Link>
        </div>
      );
    }


}

