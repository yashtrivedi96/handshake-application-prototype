import React from 'react';
import img from '../../images/matthew.png';

const ViewBio = props => {
  console.log(props);
  return (
    <div class='ui raised cards'>
        <div class='card'>
          <div
            className='ui small circular centered middle aligned image'
            style={{ paddingTop: '15px', paddingBottom: '15px' }}>
            <img  style={{ borderRadius: '50%' }} />
          </div>
          <div class='content'>
            <i className='pencil alternate icon' style={{ float: 'right' }}></i>
            <div class='header'>{props.bio.name}</div>
            <div class='meta'></div>
            <div class='description'>
              {props.bio.collegeName}
              <br></br>
              Location: {props.bio.city} | {props.bio.state}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ViewBio;
