import React from 'react';
import {Redirect} from 'react-router-dom';

const ViewExperienceItem = props => {
  return (
    <div>
      <div>
        <div className='item'>
          <div className='ui mini spaced image' style={{ float: 'left', marginRight: '10px', marginBottom: '40px' }}>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </div>
          <div className='middle aligned content'>
            <div className='header'>
            <i className='pencil alternate icon' style={{ float: 'right' }}></i>
                <h4>{props.experience.company}</h4>
            </div>
            <div className='meta'>
              <div>
                <span className='designation'>{props.experience.jobTitle}</span>
              </div>
              <div>
                <span className='date'>{props.experience.startDate} - {props.experience.endDate} | {props.experience.location}</span>
              </div>
            </div>
            <div className='description'>Work Summary: {props.experience.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // return (
  //   <div>
  //     <div>
  //       <div className='item'>
  //         <div className='ui tiny image'>
  //           <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
  //         </div>
  //         <div className='content'>
  //           <div className='header'></div>
  //           <div className='meta'>
  //             <div>
  //               <span className='major'></span>
  //             </div>
  //             <div>
  //               <span className='gpa'>Cumulative GPA:</span>
  //             </div>
  //           </div>
  //           <div className='description'></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ViewExperienceItem;
