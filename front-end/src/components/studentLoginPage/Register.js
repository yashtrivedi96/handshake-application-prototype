import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      college_name: '',
      redirect: '',
      error: undefined
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        'http://18.206.154.118:8080/api/student/register',
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          college_name: this.state.college_name
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/students' /> });
        } else {
          console.log(res);
          this.setState({ error: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {this.state.redirect}
        <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
          <p>Handshake</p>
        </div>
        <div style={{ float: 'left', width: '40%', marginTop: '20px' }}>
          <form className='ui form' onSubmit={this.onSubmitHandler}>
            <div className='field'>
              <label>College Name</label>
              <input
                type='text'
                name='college_name'
                value={this.state.college_name}
                placeholder='College Name'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div className='field'>
              <label>Name</label>
              <input
                type='text'
                name='name'
                value={this.state.name}
                placeholder='Name'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div className='field'>
              <label>Email</label>
              <input
                type='text'
                name='email'
                value={this.state.email}
                placeholder='Email'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div className='field'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                placeholder='Password'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              {this.state.error && (
                <div className='ui red message'>{this.state.error}</div>
              )}
            </div>
            <button className='ui button' type='submit'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
