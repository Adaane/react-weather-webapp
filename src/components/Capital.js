import React, { Component } from 'react';


class Capital extends Component {
  render() {
    return (
      <div
        className='capital-container'>
        <input 
          className="form-control"
          placeholder='Paris, Londres, Madrid..' 
          type="text"
          />
        <button 
          className="btn btn-success" 
          style={{margin: 10}}>
            Get weather
        </button>
      </div>
    );
  }
}

export default Capital;
