import React from 'react';
import Header from '../Header';
import ViewBio from './ViewBio';
import ViewEducationItem from './ViewEducationItem';
import ViewExperienceItem from './ViewExperienceItem';
import { connect } from 'react-redux';
import { createChats } from '../../actions';

class ViewStudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      basicDetail: [],
      educationDetails: [],
      experienceDetails: [],
      message: ''
    };
  }
  componentDidMount() {

  }

  addMessage = (e) => {
    this.setState({message: e.target.value}, () => {
      console.log(this.state.message)
    })
  }
  
  onClickHandler = (e) => {
    e.preventDefault();
    const name = 'Ralph Lauren'
    const reqObj = {
      messages: [
        {
          text: this.state.message,
          sender: name
        }
      ],
      users: [
        {
          name: name,
          userId: "5e88dfa7676b451ea1d47b01"
          
        },
        {
          name: this.props.location.state.student.name,
          userId: this.props.location.state.student._id
        }
      
      ]
    }
    this.props.createChats(reqObj);

  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={{float: 'left', width: '30%', marginTop: '20px', marginLeft: '20px'}}>
          <ViewBio bio={this.props.location.state.student} />
          <div class="ui form" style={{marginTop: '20px', width: '75%'}}>
            <div class="field">
              <textarea rows="2" value ={this.state.message} onChange={this.addMessage}></textarea>
            </div>
            <div>
            <button class="fluid ui button" onClick={this.onClickHandler} >Send Message</button>
            </div>
          </div>
        </div>
        <div style={{float: 'left', width: '60%', marginLeft: '20px', marginTop: '20px'}}>
          <div className='ui segment'>
            Career Objective
            <div>
              {this.props.location.state.student.careerObjective}
            </div>
          </div>
          <div className='ui segment'>
            Education
            {this.props.location.state.student.education.map(education => {
              return (
                <ViewEducationItem key={education._id} education={education} />
              );
            })}
          </div>
          <div className='ui segment'>
            Work Experience
            {this.props.location.state.student.experience.map(experience => {
              return (
                <ViewExperienceItem key={experience._id} experience={experience} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, { createChats })(ViewStudentProfile);
