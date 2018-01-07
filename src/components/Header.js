import React, { Component } from 'react';
import Capital from './Capital';


//déclaration du header de la page d'acceuil
class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>App.js Header</h1>
        <Capital />
      </div>
    );
  }
}

//exportation du module
export default Header;
