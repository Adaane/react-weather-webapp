import React, { Component } from 'react';
import api from '../utils/api';
import CapitalItem from '../components/CapitalItem';

class CapitalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalCityData : [],
      loading: true
    }
    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount() {
    this.makeRequest();
  }

  componentWillReceiveProps() {
    this.makeRequest();
  }

  makeRequest(){
    this.setState(function(){
      return {
        loading: true
      }
    })

    api.getCapitalCity()
      .then(function(res) {
        this.setState(function() {
          return {
            loading: false,
            capitalCityData: res
          }
        })
      }.bind(this))
  }

  render() {
    return this.state.loading === true
      ? <h1 className='weather-header'>Un instant</h1>
      : <div>
          <h1 className='header'>Température dans les captiales européennes</h1>
            <div className="capitalList-container">
          {
            this.state.capitalCityData.map(function(listItem){
              return <CapitalItem capital={listItem.capital} flag={listItem.flag} key={listItem.alpha3Code}/>
            },this)
          }
            </div>
        </div>
  }
}

export default CapitalList;
