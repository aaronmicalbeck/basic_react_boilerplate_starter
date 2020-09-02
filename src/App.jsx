import React, {Component} from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

 

  componentDidMount() {
    
  }

 render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <Home/>
          )}
        />
        <Route
          exact
          path="/gallery"
          render={() => <Gallery/>}
        />
    </div>
    );
  }
};