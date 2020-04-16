import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react';
import alt from '../images/alt.png';

class JobItemStudent extends React.Component {
  constructor() {
    super();
    this.state = { company_name: '' };
  }

  componentDidMount() {

  }
  // onClickHandler = () => {
  //   const id = 16;
  // };

  onSelectHandler = () => {
    this.props.onSelectJob(this.props.job);
  };

  render() {
    return (
      <div>
        {this.state.redirect}
        <div className='item container' onClick={this.onSelectHandler}>
          <div
            className='ui tiny image'
            style={{ float: 'left', marginRight: '10px', padding: '5px' }}
          >
            <img src={alt} />
          </div>
          <div className='content'>
            <a className='header'>
              <h4>
                {this.props.job.title} | {this.props.job.companyName} | (Job
                ID: {this.props.job._id})
              </h4>
            </a>
            <div className='meta'>
              <div>
                <span className='cinema'>
                  Descriptions: {this.props.job.jobDescription}
                </span>
              </div>
              <div>
                <span className='cinema'>
                  Job Category: {this.props.job.category}
                </span>
              </div>
              <div>
                <span className='cinema'>
                  Location: {this.props.job.location}
                </span>
              </div>
            </div>
            <div className='description'>
              <div></div>
            </div>
            <div className='extra'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobItemStudent;

{
  /* <div className='item'>
          <div className='ui mini spaced image'>
            <img src={alt} />
          </div>
          <button className='ui right floated basic primary button' onClick={this.onClickHandler}>
            Apply
          </button>
          <div className='content'>
            <div className='header'>{this.props.job.job_title}</div>
            <div className='description'>
              <p></p>
            </div>
            <div className='extra'></div>
          </div>
        </div> */
}
