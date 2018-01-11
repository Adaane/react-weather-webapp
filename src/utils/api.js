import axios from 'axios';


const _baseURL              = 'http://api.openweathermap.org/data/2.5/';
const _APIKEY               = '8a50840ab40e24762658a007cf24c48e';
const _baseURLrestcountries = 'https://restcountries.eu/rest/v2/regionalbloc/eu';

let units = 'metric';
let lang  = 'fr';


  function prepRouteParams(queryStringData) {
    return Object.keys(queryStringData)
      .map(function(key) {
        return key + '=' + encodeURIComponent(queryStringData[key]);
      }).join('&')
  }

  function prepUrl(type, queryStringData) {
    return _baseURL + type + '?' + prepRouteParams(queryStringData);
  }

  function getQueryStringData(city) {
    return {
      q    : city,
      APPID: _APIKEY,
      units: units,
      lang : lang
    }
  }

  function getCurrentWeather(city) {
    let queryStringData = getQueryStringData(city);
    let url             = prepUrl('weather', queryStringData)

    return axios.get(url)
      .then(function (currentWeatherData) {
        return currentWeatherData.data
      })
  }

  function getCapitalCity() {
    return axios.get(_baseURLrestcountries)
      .then(function(CapitalCity) {
        return CapitalCity.data
      })
  }

export default { getCurrentWeather, getCapitalCity };
