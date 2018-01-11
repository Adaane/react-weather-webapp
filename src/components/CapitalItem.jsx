import React, { Component } from 'react';
import api from '../utils/api';
import DayItem from '../components/DayItem';


class CapitalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: [],
      loading    : true
    }

    this.makeWeatherRequest = this.makeWeatherRequest.bind(this);
  }

  componentDidMount() {
    this.makeWeatherRequest(this.props.capital);
  }

  componentWillReceiveProps() {
    this.makeWeatherRequest(this.props.capital);
  }

  makeWeatherRequest(city){
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
            weatherInfo: res
          }
        })
      }.bind(this))
  }

  render() {
    return this.state.loading === true
      ? <h2 className="loading">Chargement..</h2>
      : <div className='capitalItem-container'>
          <img 
            className ='flag' 
            src       ={this.props.flag} 
            alt="flag"/>
          <h1 className="subheader">{this.props.capital}</h1>
          <DayItem 
            temp             ={this.state.weatherInfo.main.temp} 
            tempMin          ={this.state.weatherInfo.main.temp_min} 
            tempMax          ={this.state.weatherInfo.main.temp_max} 
            weatherCondition ={this.state.weatherInfo.weather[0].description}
            icon             ={this.state.weatherInfo.weather[0].icon} />
        </div>
  }
}

export default CapitalItem;
