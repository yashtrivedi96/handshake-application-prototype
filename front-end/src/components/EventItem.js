import React from 'react';
import {Link} from 'react-router-dom';
import alt from '../images/alt.png';

const EventItem = props => {
  return (
    <div className='item container'>
    <div
      className='ui tiny image'
      style={{marginRight: '10px', float: 'left' }}
    >
      <img src={alt} />
    </div>
    <div className='content' >
        <Link to={{pathname: '/student/event', state: {event : props.event}}}>
          <button class='ui right floated basic primary button' >View Event</button>
        </Link>
      <a className='header'><h4>{props.event.eventName}</h4></a>
      <div className='meta'>
        <span className='cinema'>
          {props.event.fromDate} - {props.event.toDate}
          </span>
      </div>
      <div className='description'>
        <div>
          Location: {props.event.eventLocation}
        </div>
      </div>
      <div className='extra'>
        
      </div>
    </div>
  </div>
  );
};

export default EventItem;

{/* <div class='item'>
        <div class='ui tiny image' >
          <img src={alt} />
        </div>
        <Link to={{pathname: '/student/event', state: {event : props.event}}}>
        <button class='ui right floated basic primary button' >View Event</button>
        </Link>
        <div class='middle aligned content'>
          <div class='header'>Content B</div>
          <div class='description'>
            <p></p>
          </div>
          <div class='extra'></div>
        </div>
      </div> */}