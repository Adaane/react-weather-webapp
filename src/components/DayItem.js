import React from 'react';

function DayItem(props) {
  var icon = props.icon;
  return (
    <div className='dayContainer'>
      {/*<h2 className='subheader'>{props.day}</h2>*/}
      <img className='weather' src={'images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>Température actuelle : {props.temp + '°C'}</h2>
    </div>
  )
}

export default DayItem;
