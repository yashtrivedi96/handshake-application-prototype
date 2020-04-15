import React from 'react';
import axios from 'axios';
import alt from '../images/alt.png';

class ApplicationItem extends React.Component {
  constructor() {
    super();
    this.state = { job_title: '', application_deadline: '', company_name: '' };
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className='item container'>
        <div
          className='ui tiny image'
          style={{ float: 'left', marginRight: '10px' }}>
          <img src={alt} />
        </div>
        <div className='content'>
          <a className='header'>
            <h4>{this.props.application.title}</h4>
          </a>
          <div className='meta'>
            <span className='cinema'>{this.props.application.companyName}</span>
          </div>
          <div className='description'>
            <div>
              <i className='info icon' />
              Status: {this.props.application.status}
            </div>
            <div>
              <i className='check icon' />
              Applied: {} - Application
              Closed: {}
            </div>
          </div>
          <div className='extra'></div>
        </div>
      </div>
    );
  }
}

export default ApplicationItem;

