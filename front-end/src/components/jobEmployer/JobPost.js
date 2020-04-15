import React from 'react';
import axios from 'axios';
import CompanyHeader from '../CompanyHeader';
import { Redirect } from 'react-router';

class JobPost extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: '',
      job_title: '',
      job_posting_date: '',
      application_deadline: '',
      location: '',
      job_salary: '',
      job_description: '',
      job_requirements: '',
      job_category: ''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const id = 2;
    axios
      .post(
        `http://18.206.154.118:8080/api/job/${id}`,
        {
          job_title: this.state.job_title,
          job_posting_date: this.state.job_posting_date,
          application_deadline: this.state.application_deadline,
          location: this.state.location,
          job_salary: this.state.job_salary,
          job_description: this.state.job_description,
          job_requirements: this.state.job_requirements,
          job_category: this.state.job_category
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/job/view' /> });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.redirect}
          <CompanyHeader />
          <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
            <p>Handshake</p>
          </div>
          <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
            <form className='ui form' onSubmit={this.onSubmitHandler}>
              <div className='field'>
                <label>Job Title</label>
                <input
                  type='text'
                  name='job_title'
                  value={this.state.job_title}
                  placeholder='Job Title'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Posting Date</label>
                <input
                  type='text'
                  name='job_posting_date'
                  value={this.state.job_posting_date}
                  placeholder='Job Posting Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Application Deadline</label>
                <input
                  type='text'
                  name='application_deadline'
                  value={this.state.application_deadline}
                  placeholder='Application Deadline'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Location</label>
                <input
                  type='text'
                  name='location'
                  value={this.state.location}
                  placeholder='Location'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Salary</label>
                <input
                  type='text'
                  name='job_salary'
                  value={this.state.job_salary}
                  placeholder='Job Salary'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  name='job_description'
                  value={this.state.job_description}
                  placeholder='Description'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Requirements</label>
                <input
                  type='text'
                  name='job_requirements'
                  value={this.state.job_requirements}
                  placeholder='Requirements'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className='field'>
                <label>Job Category</label>
                <input
                  type='text'
                  name='job_category'
                  value={this.state.job_category}
                  placeholder='Job Category'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                {this.state.error && (
                  <div className='ui red message'>{this.state.error}</div>
                )}
              </div>
              <button className='ui button basic primary' type='submit'>
                Create Job Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPost;
