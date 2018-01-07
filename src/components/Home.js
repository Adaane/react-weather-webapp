import React, { Component } from 'react';
import Capital from './Capital';


class Home extends Component {
  render() {
    return (
      <div 
        className="home-container"> 
        <h2 
          className="header">Enter a Capital</h2>
        <Capital />
      </div>
    )
  }
}


export default Home;
