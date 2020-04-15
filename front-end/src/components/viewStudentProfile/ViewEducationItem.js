import React from 'react';
import img from '../../images/sjsu2.png';

const ViewEducationItem = props => {
    console.log(props);
    return (
      <div>
          <div
          className='ui mini spaced image' style={{ float: 'left', marginRight: '10px', marginBottom: '50px' }}
        >
          <img src={img} />
        </div>
        <div className='middle alligned content'>
          <div className='header'>
          <i className='pencil alternate icon' style={{ float: 'right' }}></i>
            <h4>{props.education.university}</h4>
          </div>
          <div className='meta'>
            <div>
              <span className='degree'>{props.education.degree}</span>
            </div>
            <div>
              <span className='passing_year'>{props.education.yearOfPassing}</span>
            </div>
            <div>
              <span className='major'>Major in {props.education.major}</span>
            </div>
            <div>
              <span className='gpa'>Cumulative GPA: {props.education.cgpa}</span>
            </div>
          </div>
          <div className='description'></div>
        </div>
      </div>
      
  )
};

export default ViewEducationItem;
