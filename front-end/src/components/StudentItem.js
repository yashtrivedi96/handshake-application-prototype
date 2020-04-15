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
    // const id = this.props.student.student_id;
    // axios.get(`http://18.206.154.118:8080/api/student/education/${id}`).then((res)=> {
    //         if(res.status === 200) {
    //             console.log(res.data.result);
    //             this.setState({education: res.data.result})
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //     })
  }

  onClickHandler = () => {
    console.log(this.props.student.student_id);
    this.setState({
      redirect: (
        <Redirect
          to={{
            pathname: '/student/profile',
            state: { id: this.props.student.student_id }
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
