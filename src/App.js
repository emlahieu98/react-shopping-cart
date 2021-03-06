
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header'
import Main from "./components/Main";
import Footer from "./components/Footer";
export default class App extends Component {
  
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
