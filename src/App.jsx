import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Weather from './components/Weather';
import Capital from './components/Capital';
import CapitalList from './components/CapitalList';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
         <Route render={function(props) {
          return (
            <div className="navbar">
             <h1>Application météo</h1>
              <a className="link" href="/">Acceuil</a>
              <a className="link"href="/list">Liste des capitales européennes</a>
                <Capital 
                  onSubmitCapital={function(city){
                    props.history.push({
                      pathname: '/weather',
                      search: '?city=' + city
                  });
                }}
                  capital={'Paris'} />
            </div>
            )
          }} />
          <Route exact path='/' render={function(props) {
            return (
              <div className="home-container"> 
                <h2 className="header">Saisissez le nom d'une ville</h2>
              <Capital 
                onSubmitCapital={function(city){
                  props.history.push({
                    pathname: '/weather',
                    search: '?city=' + city
                  });
                 }}
                capital={'Paris'} />
              </div> 
            )
          }} />
          <Route path='/weather' component={Weather}/>
          <Route path='/list' component={CapitalList}/>
        </div>
      </Router>
    )
  }
}


export default App;
