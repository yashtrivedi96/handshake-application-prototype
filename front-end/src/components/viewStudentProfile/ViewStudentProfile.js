import React from 'react';
import Header from '../Header';
import ViewBio from './ViewBio';
import ViewEducationItem from './ViewEducationItem';
import ViewExperienceItem from './ViewExperienceItem';
// import { connect } from 'react-redux';
// import { fetchStudentProfile } from '../../actions';

class ViewStudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      basicDetail: [],
      educationDetails: [],
      experienceDetails: []
    };
  }
  componentDidMount() {


    // const id = 17;
    // axios.get(`http://18.206.154.118:8080/api/student/${id}`).then(res => {
    //   if (res.status === 200) {
    //     console.log(res.data);
    //     this.setState({ basicDetail: res.data.result });
    //   }
    // });

    // axios
    //   .get(`http://18.206.154.118:8080/api/student/education/${id}`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res.data);
    //       this.setState({ educationDetails: res.data.result });
    //     }
    //   });

    // axios
    //   .get(`http://18.206.154.118:8080/api/student/experience/${id}`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log(res.data);
    //       this.setState({ experienceDetails: res.data.result });
    //     }
    //   });
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={{float: 'left', width: '30%', marginTop: '20px', marginLeft: '20px'}}>
          <ViewBio bio={this.props.location.state.student} />
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
                <ViewEducationItem key={education} education={education} />
              );
            })}
          </div>
          <div className='ui segment'>
            Work Experience
            {this.props.location.state.student.experience.map(experience => {
              return (
                <ViewExperienceItem key={experience} experience={experience} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}



export default ViewStudentProfile;
