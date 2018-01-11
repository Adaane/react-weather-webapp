import React, { Component }from 'react';
import api from '../utils/api';
import DayItem  from '../components/DayItem';
import queryString from 'query-string';
import helpers from '../utils/helpers';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      loading   : true
    }

    this.makeRequest = this.makeRequest.bind(this);

  }

  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }

  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }



// Fais la reqûette
  makeRequest(city){
    this.setState(function(){
      return {
        loading: true
      }
    })

    api.getCurrentWeather(city)
      .then(function(res) {
        this.setState(function() {
          return {
            loading: false,
            weatherData: res
          }
        })
      }.bind(this))
  }

// Gère le clique pour les détails mais pas utiles pour l'instant
  // handleClick(city){

  // }


  render() {
    return this.state.loading === true
      ? <h1 className='weather-header'>Chargement..</h1>
      : <div>
          <h1 className='weather-header'>{this.city}</h1>
          <div className='weather-container'>
            <DayItem temp={this.state.weatherData.main.temp} day={helpers.getDate(this.state.weatherData.dt)} icon={this.state.weatherData.weather[0].icon} />
          </div>
        </div>
  }
}

export default Weather;
