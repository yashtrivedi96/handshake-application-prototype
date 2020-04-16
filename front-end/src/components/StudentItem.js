import React from 'react';
import alt from '../images/alt.png';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createChats } from '../actions';

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

  onMessage = () => {
    const name = 'Yash T'
    const studentId = '5e87e56a9bc9ba4b027cb3d6'
    const reqObj = {
      messages: [
        {
          text: "Hi",
          sender: name
        }
      ],
      users: [
        {
          name: name,
          userId: "5e87e56a9bc9ba4b027cb3d6"
          
        },
        {
          name: this.props.student.name,
          userId: this.props.student._id
        }
      
      ]
    }
    this.props.createChats(reqObj)
    this.setState({redirect: (
      <Redirect
        to={{
          pathname: '/message',
          state: { student: this.props.student }
        }}
      />
    )

    })
  }

  render() {
    return (
      <div className='item container' >
        {this.state.redirect}
        <div
          className='ui tiny image'
          style={{ float: 'left', marginRight: '10px' }}
        >
          <img src={alt} style={{ borderRadius: '50%' }} />
        </div>
        <div className='content'>
          <button className='ui right floated basic primary button' onClick={this.onMessage} >
            <i class='comment icon'></i>
            Message
          </button>
          <a className='header' onClick={this.onClickHandler}>
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

export default connect(null, { createChats })(StudentItem);
