import React, { Component } from 'react';
import DayItem from '../components/DayItem';
import api from '../utils/api';


class CapitalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: [],
      loading : true
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
            loading: false,
            weatherInfo: res
          }
        })
      }.bind(this))
  }

  render() {
      return this.state.loading === true
      ? <h2 className="subheader">Chargement..</h2>
      : <div className='capitalItem-container'>
          <img className='flag' src={this.props.flag} alt="flag"/>
          <h1 className="subheader">{this.props.capital}</h1>
          <DayItem temp={this.state.weatherInfo.main.temp} icon={this.state.weatherInfo.weather[0].icon} />
        </div>
  }
}

export default CapitalItem;
