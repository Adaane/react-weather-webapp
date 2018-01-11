import React, { Component } from 'react';
import Capital from './Capital';


//déclaration du header de la page d'acceuil
class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>Application météo</h1>
        <Capital 
          onSubmitCapital={function(city, props){
            props.history.push({
              pathname: '/weather',
              search: '?city=' + city
            });
        }}
        capital={'Paris'} />
      </div>
    );
  }
}

//exportation du module
export default Header;
