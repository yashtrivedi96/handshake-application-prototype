import React from 'react';
import img from '../../images/matthew.png';

const ViewBio = props => {
  console.log(props);
  if(props.bio.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div class='ui link cards'>
      <div class='card'>
        <div class='image'>
          <img src={img} style={{borderRadius: '50%'}} />
        </div>
        <div class='content'>
          <div class='header'>{props.bio[0].student_name}</div>
          <div class='meta'>
            <a>Friends</a>
          </div>
          <div class='description'>
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div class='extra content'>
          <span class='right floated'>Joined in 2013</span>
          <span>
            <i class='user icon'></i>
            75 Friends
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewBio;
