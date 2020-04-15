import React from 'react';
import axios from 'axios';
import alt from '../images/alt.png';
import { Redirect } from 'react-router';

class StudentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: '', education: [], work: [] };
  }

  componentDidMount() {

  }

  onClickHandler = () => {
    console.log(this.props.student.student_id);
    this.setState({
      redirect: (
        <Redirect
          to={{
            pathname: '/student/profile',
            state: { student: this.props.student }
          }}
        />
      )
    });
  };
  render() {
    return (
      <div className='item container' onClick={this.onClickHandler}>
        {this.state.redirect}
        <div
          className='ui tiny image'
          style={{ float: 'left', marginRight: '10px' }}
        >
          <img src={alt} style={{ borderRadius: '50%' }} />
        </div>
        <div className='content'>
          <button className='ui right floated basic primary button'>
            <i class='comment icon'></i>
            Message
          </button>
          <a className='header'>
            <h4>{this.props.student.name}</h4>
          </a>
          <div className='meta'>
            <span className='cinema'>
              <i className='university icon' />
              {this.props.student.collegeName}
            </span>
          </div>
          <div className='description'>
            <div>
              <i className='graduation cap icon' />
              {this.props.student.major}
            </div>
          </div>
          <div className='extra'></div>
        </div>
      </div>
    );
  }
}

export default StudentItem;
