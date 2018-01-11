import React, { Component } from 'react';
import Capital from './Capital';


class Home extends Component {
  render() {
    return (
      <div 
        className="home-container"> 
        <h2 
          className="header">Enter a Capital</h2>
        <Capital 
          onSubmitCapital={function(city, props){
            props.history.push({
              pathname: '/weather',
              search: '?city=' + city
            });
          }}
          capital={'Paris'} />
      </div>
    )
  }
}


export default Home;
