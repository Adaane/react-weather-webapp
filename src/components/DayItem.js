import React from 'react';

const DayItem = (props) => {
  const icon = props.icon;

  return (
    <div className='dayContainer'>
      {/*<h2 className='subheader'>{props.day}</h2>*/}
      <img className='weather' src={'images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{props.weatherCondition.replace(/\b\w/g, l => l.toUpperCase())}</h2>
      <h2 className='subheader'>Température actuelle : {props.temp + '°C'}</h2>
      <h2 className='subheader'>Température minimale : {props.tempMin + '°C'}</h2>
      <h2 className='subheader'>Température maximal : {props.tempMax + '°C'}</h2>
    </div>
  )
}

export default DayItem;
