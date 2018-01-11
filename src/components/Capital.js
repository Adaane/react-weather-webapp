import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Capital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capital: ''
    };

    this.handleSubmitCapital = this.handleSubmitCapital.bind(this);
    this.handleUpdateCapital = this.handleUpdateCapital.bind(this);
  }

  handleSubmitCapital() {
    this.props.onSubmitCapital(this.state.capital)

    this.setState(function(){
      return {
        capital: ''
      }
    })
  }

  handleUpdateCapital(e) {
    var capitalInput = e.target.value;
    this.setState(function () {
      return {
        capital: capitalInput
      }
    });
  }

  render() {
    return (
      <div
        className='capital-container'>
        <input 
          className="form-control"
          type="text"
          placeholder='Ex: Paris' 
          onChange={this.handleUpdateCapital}
          value={this.state.capital}
          />
        <button 
          className="btn btn-success" 
          onClick={this.handleSubmitCapital}
          style={{margin: 10}}>
            Rechercher
        </button>
      </div>
    );
  }
}

Capital.defaultProps = {
  direction: 'column'
}

Capital.propTypes = {
  direction: PropTypes.string,
}

export default Capital;
