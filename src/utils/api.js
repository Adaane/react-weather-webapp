import axios from 'axios';


var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '8a50840ab40e24762658a007cf24c48e';
var units = 'metric';
var _baseURLrestcountries = 'https://restcountries.eu/rest/v2/regionalbloc/eu'


// Prépare la route pour la requete vers l'api
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
      q: city,
      APPID: _APIKEY,
      units: units
    }
  }

  function getCurrentWeather(city) {
    var queryStringData = getQueryStringData(city);
    var url = prepUrl('weather', queryStringData)

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
