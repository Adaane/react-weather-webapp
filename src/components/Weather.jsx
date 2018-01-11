import React, { Component }from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import helpers from '../utils/helpers';
import DayItem  from '../components/DayItem';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      loading    : true
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
            loading    : false,
            weatherData: res
          }
        })
      }.bind(this))
  }

  render() {
    return this.state.loading === true
      ? <h1 className='loading'>Chargement..</h1>
      : <div>
          <h1 className='weather-header'>{this.city}</h1>
          <div className='weather-container'>
            <DayItem 
              temp             ={this.state.weatherData.main.temp} 
              tempMin          ={this.state.weatherData.main.temp_min} 
              tempMax          ={this.state.weatherData.main.temp_max} 
              weatherCondition ={this.state.weatherData.weather[0].description}
              day              ={helpers.getDate(this.state.weatherData.dt)} 
              icon             ={this.state.weatherData.weather[0].icon} />
          </div>
        </div>
  }
}

export default Weather;
